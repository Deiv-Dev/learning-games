import React from "react";
import "./GameOverComponent.scss";

const GameOverComponent = ({
    handlePlayAgain,
    correctCount,
    wrongCount,
    startTime,
    endTime,
}) => {
    const formatElapsedTime = (milliseconds) => {
        const minutes = Math.floor(milliseconds / (1000 * 60));
        const seconds = Math.floor((milliseconds / 1000) % 60);
        return `${minutes} min ${seconds} sec`;
    };

    return (
        <div className="center-button">
            <div>
                <button onClick={handlePlayAgain}>Žaisti dar kartą</button>
            </div>
            <div className="counters">
                <p>Teisingi paspaudimai: {correctCount}</p>
                <p>Neteisingi paspaudimai: {wrongCount}</p>
                <p>Trukmė: {formatElapsedTime(endTime - startTime)}</p>
            </div>
        </div>
    );
};

export default GameOverComponent;
