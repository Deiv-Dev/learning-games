import React from "react";
import "./GameOverComponent.scss";
import { getCorrectScoreCount, getWrongScoreCount } from "@/Helpers/scoreCount";

const GameOverComponent = ({ handlePlayAgain, endTimer }) => {
    return (
        <div className="center-button">
            <div>
                <button onClick={handlePlayAgain}>Žaisti dar kartą</button>
            </div>
            <div className="counters">
                <p>Teisingi paspaudimai: {getCorrectScoreCount()}</p>
                <p>Neteisingi paspaudimai: {getWrongScoreCount()}</p>
                <p>Trukmė: {endTimer()}</p>
            </div>
        </div>
    );
};

export default GameOverComponent;
