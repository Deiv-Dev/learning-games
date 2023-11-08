import React, { useEffect, useState } from "react";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import { handleCardClick } from "@/Helpers/clickedCards";
import { shuffleArray } from "@/Helpers/shuffleArray";
import { countCorrectPress, countWrongPress } from "@/Helpers/scoreCount";
import { alphabet } from "./lettersGameData";
import { getRandomLightColor } from "@/Helpers/generateLightRandomColors";
import { startTimer, endTimer } from "@/Helpers/countTime";
import { generatingArrayWithRandomValuesAndCorrectValues } from "@/Helpers/generatingArray";

const LettersGame = () => {
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        startTimer();
    }, []);

    useEffect(() => {
        setSelectedLetters(
            shuffleArray(
                generatingArrayWithRandomValuesAndCorrectValues(
                    alphabet,
                    currentLetterIndex
                )
            )
        );
    }, [currentLetterIndex]);

    const handleCardClick = (clickedCard) => {
        if (gameOver) return;

        const correctLetter = alphabet[currentLetterIndex];
        if (clickedCard === correctLetter) {
            setIsCorrect(true);
            countCorrectPress();
            setTimeout(() => {
                setIsCorrect(null);
                const nextIndex = (currentLetterIndex + 1) % alphabet.length;
                if (nextIndex === 0) {
                    setGameOver(true);
                }
                setCurrentLetterIndex(nextIndex);
                setSelectedLetters(
                    shuffleArray(
                        generatingArrayWithRandomValuesAndCorrectValues(
                            alphabet,
                            currentLetterIndex
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
                wordsToFind={alphabet}
                cards={selectedLetters}
                currentWordIndex={currentLetterIndex}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style={"colors-game"}
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />#
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName={"letters-game"}
                />
            )}
        </>
    );
};

export default LettersGame;
