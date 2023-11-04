import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import "./GameOverComponent.scss";
import { score } from "@/Helpers/scoreCount";
import { formatElapsedTime } from "@/Helpers/countTime";
import { submitGameScore } from "@/Helpers/submitGameScore ";

const GameOverComponent = ({ handlePlayAgain, endTimer, gameName }) => {
    useEffect(() => {
        submitGameScore(gameName, endTimer, score());
    }, []);

    return (
        <div className="center-button">
            <form>
                <div>
                    <button onClick={handlePlayAgain}>Žaisti dar kartą</button>
                </div>
                <div className="counters">
                    <p>Taskai: {score()}</p>
                    <p>Trukmė: {formatElapsedTime(endTimer())}</p>
                    <Link href={route("games-scores")}>
                        <button onClick={handlePlayAgain}>Tasku ziuer</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default GameOverComponent;
