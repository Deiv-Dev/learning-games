import React, { useState, useEffect } from "react";
import "./NumberGames.scss";
import { shuffleArray } from "../../../Helpers/shuffleArray";
import { numbersOnCards, numbersInWords } from "../../../Helpers/gamesData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";

const GridWithNumbers = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);
    const [startTime, setStartTime] = useState(Date.now());
    const [endTime, setEndTime] = useState(null);

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
            setCorrectCount((count) => count + 1);
            setTimeout(() => {
                setIsCorrect(null);
                const nextIndex =
                    (currentWordIndex + 1) % numbersInWords.length;
                if (nextIndex === 0) {
                    setGameOver(true);
                    setEndTime(Date.now());
                }
                setCurrentWordIndex(nextIndex);
                generateUniqueRandomNumbers();
            }, 500);
        } else {
            setIsCorrect(false);
            setWrongCount((count) => count + 1);
            setTimeout(() => {
                setIsCorrect(null);
            }, 500);
        }
    };

    const handlePlayAgain = () => {
        setCurrentWordIndex(0);
        setGameOver(false);
        setCorrectCount(0);
        setWrongCount(0);
        generateUniqueRandomNumbers();
        setStartTime(Date.now());
        setEndTime(null);
    };

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
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    correctCount={correctCount}
                    wrongCount={wrongCount}
                    startTime={startTime}
                    endTime={endTime}
                />
            )}
        </>
    );
};

export default GridWithNumbers;
