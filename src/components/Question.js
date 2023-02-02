
import React, { useState } from "react";
import "../App.css"

export default function Question(props) {

    const [selected, setSelected] = useState('')

    const onChangeValue = (event) => {
        setSelected(event.target.value)
    }

    const styles = {
        border: 'none',
        backgroundColor: '#D6DBF5'
    }

    const correct = {
        backgroundColor: 'rgb(144, 238, 144, 0.8)',
        border: 'none'
    }

    const incorrect = {
        backgroundColor: 'rgb(255, 0, 0, 0.3)',
        border: 'none'
    }

    function isSelected(answer) {
        if (selected === answer) {
            return styles
        }
    }

    function markAnswer(answer) {
        if (selected === answer) {
            if (answer === props.correct) {
                return correct
            } else {
                return incorrect
            }
        } else if (answer === props.correct) {
            return correct
        }
    }

    if (props.results) {
        let correctAnswer = props.correct
        props.getState(selected, correctAnswer)
    }



    return(
        <div className="question--container">
            <h3 className="question--prompt">{props.prompt}</h3>
            <div className="question--options" onChange={onChangeValue}>
                <label style={props.results ? markAnswer(props.answer1) : isSelected(props.answer1)}>
                    <input 
                        type="radio" 
                        value={props.answer1} 
                        name={props.id}
                        checked={selected === props.answer1}
                        disabled={props.results}
                    />
                    {props.answer1}
                </label>
                <label style={props.results ? markAnswer(props.answer2) : isSelected(props.answer2)}>
                    <input 
                        type="radio" 
                        value={props.answer2} 
                        name={props.id}
                        checked={selected === props.answer2}
                        disabled={props.results}
                        
                    />
                    {props.answer2}
                </label>
                <label style={props.results ? markAnswer(props.answer3) : isSelected(props.answer3)}>
                    <input 
                        type="radio"
                        value={props.answer3} 
                        name={props.id} 
                        checked={selected === props.answer3}
                        disabled={props.disabled}
                    />
                    {props.answer3}
                </label>
                <label style={props.results ? markAnswer(props.answer4) : isSelected(props.answer4)}>
                    <input
                        type="radio" 
                        value={props.answer4} 
                        name={props.id} 
                        checked={selected === props.answer4}
                        disabled={props.results}
                    />
                    {props.answer4}
                </label>
                <br></br>
            </div>
        </div>
    )
}