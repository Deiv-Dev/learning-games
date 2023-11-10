import React, { useEffect, useState } from "react";
import "./AddNumbersGame.scss";
import { getRandomLightColor } from "@/Helpers/generateLightRandomColors";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import { startTimer, endTimer } from "@/Helpers/countTime";
import {
    countCorrectPress,
    countWrongPress,
    resetScoreCount,
} from "@/Helpers/scoreCount";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";

const AddNumbersGames = () => {
    const [answer, setAnswer] = useState(0);
    const [rotationTillGameEnds, setRotationTillGameEnds] = useState(0);
    const [randomNumbersToAdd, setRandomNumbersToAdd] = useState([]);
    const [randomBackgroundColors, setRandomBackgroundColors] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        startTimer();
        setRandomNumbersToAdd(generateRandomNumbers());
        setRandomBackgroundColors(getRandomLightColor);
    }, []);

    const generateRandomNumbers = () => {
        let randomNumbersArray;

        do {
            randomNumbersArray = [];
            for (let index = 0; index < 2; index++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                randomNumbersArray.push(randomNumber);
            }
        } while (randomNumbersArray.reduce((acc, num) => acc + num, 0) > 10);

        return randomNumbersArray;
    };

    const onSubmit = () => {
        if (randomNumbersToAdd[0] + randomNumbersToAdd[1] == answer) {
            setIsCorrect(true);
            countCorrectPress();
            setTimeout(() => {
                setIsCorrect(null);
                setRandomBackgroundColors(getRandomLightColor);
                setRandomNumbersToAdd(generateRandomNumbers());
                setRotationTillGameEnds(rotationTillGameEnds + 1);
                if (rotationTillGameEnds === 10) {
                    setGameOver(true);
                }
            }, 500);
        } else {
            setIsCorrect(false);
            countWrongPress();
            setTimeout(() => {
                setIsCorrect(null);
            }, 500);
        }
    };

    const handlePlayAgain = () => {
        setRotationTillGameEnds(0);
        resetScoreCount();
        setRandomNumbersToAdd(generateRandomNumbers());
        startTimer();
        setGameOver(false);
    };

    return (
        <>
            {" "}
            <div className="add-numbers-grid-container">
                <div
                    className="add-numbers-game"
                    style={{ backgroundColor: randomBackgroundColors }}
                >
                    <p className="card-text">
                        {randomNumbersToAdd[0]} + {randomNumbersToAdd[1]} =
                    </p>
                </div>
                <div
                    className="add-numbers-game"
                    style={{ backgroundColor: randomBackgroundColors }}
                >
                    <form onSubmit={onSubmit}>
                        <input
                            type="number"
                            name="answerNumber"
                            onChange={(e) => setAnswer(e.target.value)}
                            required
                        />
                    </form>
                </div>
                <button type="submit" onClick={onSubmit}>
                    Tikrinti atsakyma
                </button>
            </div>
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName={"add-numbers-game"}
                />
            )}
        </>
    );
};

export default AddNumbersGames;
