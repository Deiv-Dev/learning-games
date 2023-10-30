import React, { useState, useEffect } from "react";
import "./NumbersGame.scss";
import { shuffleArray } from "../../../Helpers/shuffleArray";
import { numbersOnCards, numbersInWords, colors } from "./numbersGameData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../Helpers/countTime";
import {
    countCorrectPress,
    countWrongPress,
    resetScoreCount,
} from "@/Helpers/scoreCount";

const NumbersGame = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const generateUniqueRandomNumbers = () => {
        const randomNumbers = [currentWordIndex + 1];

        while (randomNumbers.length < 9) {
            const randomIndex = Math.floor(
                Math.random() * numbersOnCards.length
            );
            const randomNum = numbersOnCards[randomIndex];
            if (!randomNumbers.includes(randomNum)) {
                randomNumbers.push(randomNum);
            }
        }

        setSelectedNumbers(shuffleArray(randomNumbers));
    };

    const handleCardClick = (clickedNumber) => {
        if (gameOver) return;

        const correctNumber = numbersOnCards[currentWordIndex];
        if (clickedNumber === correctNumber) {
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
                generateUniqueRandomNumbers();
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
        generateUniqueRandomNumbers();
        startTimer();
    };

    useEffect(() => {
        startTimer();
    }, []);

    useEffect(() => {
        generateUniqueRandomNumbers();
    }, [currentWordIndex]);

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                numbersInWords={numbersInWords}
                selectedNumbers={selectedNumbers}
                currentWordIndex={currentWordIndex}
                colors={colors}
                style={1}
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                />
            )}
        </>
    );
};

export default NumbersGame;
