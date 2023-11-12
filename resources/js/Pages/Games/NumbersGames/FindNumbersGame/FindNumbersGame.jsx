import React, { useState, useEffect } from "react";
import "./FindNumbersGame.scss";
import { shuffleArray } from "../../../../Helpers/shuffleArray";
import { numbersOnCards, numbersInWords } from "./FindNumbersGameData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../../Helpers/countTime";
import {
    countCorrectPress,
    countWrongPress,
    resetScoreCount,
} from "@/Helpers/scoreCount";
import { getRandomLightColor } from "@/Helpers/generateLightRandomColors";
import { generatingArrayWithRandomValuesAndCorrectValues } from "@/Helpers/generatingArray";

const NumbersGame = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        startTimer();
    }, []);

    useEffect(() => {
        setSelectedNumbers(
            shuffleArray(
                generatingArrayWithRandomValuesAndCorrectValues(
                    numbersOnCards,
                    currentWordIndex
                )
            )
        );
    }, [currentWordIndex]);

    const handleCardClick = (clickedCard) => {
        if (gameOver) return;

        const correctNumber = numbersOnCards[currentWordIndex];
        if (clickedCard === correctNumber) {
            setIsCorrect(true);
            countCorrectPress();
            setTimeout(() => {
                setIsCorrect(null);
                const nextIndex =
                    (currentWordIndex + 1) % numbersInWords.length;
                if (nextIndex === 0) {
                    setGameOver(true);
                }
                setCurrentWordIndex(nextIndex);
                setSelectedNumbers(
                    shuffleArray(
                        generatingArrayWithRandomValuesAndCorrectValues(
                            numbersOnCards,
                            currentWordIndex
                        )
                    )
                );
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
        setCurrentWordIndex(0);
        setGameOver(false);
        resetScoreCount();
        setSelectedNumbers(
            shuffleArray(
                generatingArrayWithRandomValuesAndCorrectValues(
                    numbersOnCards,
                    currentWordIndex
                )
            )
        );
        startTimer();
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={numbersInWords}
                cards={selectedNumbers}
                currentWordIndex={currentWordIndex}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style={"cards-with-text"}
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName={"find-numbers-game"}
                />
            )}
        </>
    );
};

export default NumbersGame;
