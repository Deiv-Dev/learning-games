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
        <div className="game__over">
            <form>
                <div>
                    <button
                        className="game__over__play__again"
                        onClick={handlePlayAgain}
                    >
                        Žaisti dar kartą
                    </button>
                </div>
                <div className="game__over__counters">
                    <p className="game__over__counters__text">
                        Taskai: {score()}
                    </p>
                    <p className="game__over__counters__text">
                        Trukmė: {formatElapsedTime(endTimer())}
                    </p>
                    <Link href={route("games-scores", { name: gameName })}>
                        <button>Tasku ziuer</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default GameOverComponent;
