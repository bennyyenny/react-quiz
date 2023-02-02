import React, { useEffect, useRef, useState } from "react";
import Question from "./Question";

export default function QuizPage() {

    const [quizData, setQuizData] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [showScore, setShowScore] = useState(false)
    const score = useRef(0)


    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])

    function fetchData() {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
        .then(res => res.json())
        .then(data => setQuizData(data.results))
        setShowResults(false)
        setShowScore(false)
        score.current = 0
    }

    function shuffleOptions(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    
    function getState(data, correctAnswer) {
        if (data === correctAnswer) {
            score.current++
        }
        console.log(score, data, correctAnswer)
        setShowScore(true)
    }




    const questionSet = quizData.map((question) => {
        const quizOptions = question.incorrect_answers.concat([question.correct_answer])
        shuffleOptions(quizOptions)
        return <Question
                    prompt={question.question} 
                    answer1={quizOptions[0]}
                    answer2={quizOptions[1]}
                    answer3={quizOptions[2]}
                    answer4={quizOptions[3]}
                    correct={question.correct_answer}
                    id={Math.random() * 1000}
                    results={showResults}
                    disabled={showResults}
                    getState={getState}
                />
    })

    return(
        <div className="quiz--container">
            {questionSet}
            {!showResults && <button className="quiz--button" onClick={() => setShowResults(true)}>Check Answers</button>}
            <div className="results--quiz">
                {showScore && <h3 className="quiz--score">You scored {score.current/2}/10 answers correct</h3>}
                {showResults && <button className="again--button" onClick={() => fetchData()}>Play Again</button>}  
            </div>

        </div>
    )
}