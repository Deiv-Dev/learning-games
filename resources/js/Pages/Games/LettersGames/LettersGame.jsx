import React, { useEffect, useState } from "react";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import { shuffleArray } from "@/Helpers/shuffleArrayHelper";
import { alphabet } from "./lettersGameData";
import { getRandomLightColor } from "@/Helpers/generateLightRandomColorsHelper";
import { startTimer, endTimer } from "@/Helpers/countTimeHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "@/Helpers/generatingArrayHelper";
import { handleCardClickHelper } from "@/Helpers/cardClickedHelper";
import { resetScoreCount } from "@/Helpers/scoreCountHelper";
import { cardsPlayAgainHelper } from "@/Helpers/cardPlayAgainHelper";

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
        handleCardClickHelper({
            clickedCard,
            valuesOnCards: alphabet,
            currentValueIndex: currentLetterIndex,
            gameOver,
            setIsCorrect,
            setGameOver,
            setCorrectAnswersIndex: setCurrentLetterIndex,
            setValuesToDisplayOnCards: setSelectedLetters,
        });
    };

    const handlePlayAgain = (event) => {
        event.preventDefault();
        cardsPlayAgainHelper(
            setCurrentLetterIndex,
            setGameOver,
            setSelectedLetters,
            alphabet,
            currentLetterIndex
        );
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={alphabet}
                cards={selectedLetters}
                currentWordIndex={currentLetterIndex}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style="cards-with-text"
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName="letters-game"
                />
            )}
        </>
    );
};

export default LettersGame;
