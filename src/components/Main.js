import React from "react";

export default function Main(props) {
    return(
        <div className="main--container">
            <h1>Quizzical</h1>
            <p>Test your knowledge</p>
            <button className="main--button" onClick={() => props.onClick('quiz')}>Start quiz</button>
        </div>
    )
}