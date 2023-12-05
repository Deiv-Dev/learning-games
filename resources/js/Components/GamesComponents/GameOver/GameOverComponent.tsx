import React, { useEffect } from "react";
import { Link } from "@inertiajs/react";
import "./GameOverComponent.scss";
import { score } from "../../../Helpers/scoreCountHelper";
import { formatElapsedTime } from "../../../Helpers/countTimeHelper";
import { submitGameScore } from "../../../Helpers/submitGameScoreHelper";
import route from "ziggy-js";

interface GameOverComponentProps {
    handlePlayAgain: (event: React.MouseEvent) => void;
    endTimer: () => number;
    gameName: string;
}

const GameOverComponent: React.FC<GameOverComponentProps> = ({
    handlePlayAgain,
    endTimer,
    gameName,
}) => {
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
                    <Link
                        className="game__over__play__again game__over__counters__text"
                        href={route("games-scores", { name: gameName })}
                    >
                        <button>Tasku ziuer</button>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default GameOverComponent;
