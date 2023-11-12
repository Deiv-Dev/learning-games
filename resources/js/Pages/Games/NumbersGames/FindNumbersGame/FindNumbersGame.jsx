import React, { useState, useEffect } from "react";
import "./FindNumbersGame.scss";
import { shuffleArray } from "../../../../Helpers/shuffleArrayHelper";
import { numbersOnCards, numbersInWords } from "./FindNumbersGameData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../../Helpers/countTimeHelper";
import { resetScoreCount } from "@/Helpers/scoreCountHelper";
import { getRandomLightColor } from "@/Helpers/generateLightRandomColorsHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "@/Helpers/generatingArrayHelper";
import { handleCardClickHelper } from "@/Helpers/cardClickedHelper";

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
        handleCardClickHelper({
            clickedCard,
            valuesOnCards: numbersOnCards,
            currentValueIndex: currentWordIndex,
            gameOver,
            setIsCorrect,
            setGameOver,
            setCorrectAnswersIndex: setCurrentWordIndex,
            setValuesToDisplayOnCards: setSelectedNumbers,
        });
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
