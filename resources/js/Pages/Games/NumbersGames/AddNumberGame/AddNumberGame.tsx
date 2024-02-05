import React, { useEffect, useState } from "react";
import "./AddNumbersGame.scss";
import { getRandomLightColor } from "../../../../Helpers/generateLightRandomColorsHelper";
import FeedbackMessageComponent from "../../../../Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import { startTimer, endTimer } from "../../../../Helpers/countTimeHelper";
import {
    countCorrectPress,
    countWrongPress,
    resetScoreCount,
} from "../../../../Helpers/scoreCountHelper";
import GameOverComponent from "../../../../Components/GamesComponents/GameOver/GameOverComponent";
import CalculatorKeysComponent from "../../../../Components/GamesComponents/CalculatorKeys/CalculatorKeysComponent";

const AddNumbersGames: React.FC = () => {
    const [answer, setAnswer] = useState<number>(0);
    const [rotationTillGameEnds, setRotationTillGameEnds] = useState<number>(0);
    const [randomNumbersToAdd, setRandomNumbersToAdd] = useState<number[]>([]);
    const [randomBackgroundColors, setRandomBackgroundColors] =
        useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);

    useEffect(() => {
        startTimer();
        setRandomNumbersToAdd(generateTwoRandomNumbers());
        setRandomBackgroundColors(getRandomLightColor);
    }, []);

    const generateTwoRandomNumbers = (): number[] => {
        let randomNumbersArray: number[];

        do {
            randomNumbersArray = [];
            for (let index = 0; index < 2; index++) {
                const randomNumber = Math.floor(Math.random() * 10) + 1;
                randomNumbersArray.push(randomNumber);
            }
        } while (randomNumbersArray.reduce((acc, num) => acc + num, 0) > 10);

        return randomNumbersArray;
    };

    const onSubmit = (): void => {
        if (
            randomNumbersToAdd[0] !== undefined &&
            randomNumbersToAdd[1] !== undefined
        ) {
            if (randomNumbersToAdd[0] + randomNumbersToAdd[1] === answer) {
                setIsCorrect(true);
                countCorrectPress();
                setTimeout(() => {
                    setAnswer(0);
                    setIsCorrect(null);
                    setRandomBackgroundColors(getRandomLightColor);
                    setRandomNumbersToAdd(generateTwoRandomNumbers());
                    setRotationTillGameEnds((prevRotation) => prevRotation + 1);
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
        }
    };

    const handleCardClick = (clickedCard: string | number): void => {
        if (typeof clickedCard === "number") {
            setAnswer((prevAnswer) => prevAnswer * 10 + clickedCard);
        } else if (clickedCard === "back") {
            setAnswer((prevAnswer) => Math.floor(prevAnswer / 10));
        } else if (clickedCard === "submit") {
            onSubmit();
        }

        console.log(clickedCard);
    };

    const handlePlayAgain = (event: React.MouseEvent) => {
        event.preventDefault();
        setGameOver(false);
        resetScoreCount();
        startTimer();
        setRotationTillGameEnds(0);
    };

    return (
        <>
            <CalculatorKeysComponent
                randomBackgroundColors={randomBackgroundColors}
                randomNumbersToAdd={randomNumbersToAdd}
                handleCardClick={handleCardClick}
                answer={answer}
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName="add-numbers-game"
                />
            )}
        </>
    );
};

export default AddNumbersGames;
