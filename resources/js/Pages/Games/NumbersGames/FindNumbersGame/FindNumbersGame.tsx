import React, { useState, useEffect } from "react";
import "./FindNumbersGame.scss";
import { shuffleArray } from "../../../../Helpers/shuffleArrayHelper";
import { numbersOnCards, numbersInWords } from "./FindNumbersGameData";
import FeedbackMessageComponent from "../../../../Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "../../../../Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "../../../../Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../../Helpers/countTimeHelper";
import { getRandomLightColor } from "../../../../Helpers/generateLightRandomColorsHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "../../../../Helpers/generatingArrayHelper";
import { handleCardClickHelper } from "../../../../Helpers/cardClickedHelper";
import { cardsPlayAgainHelper } from "../../../../Helpers/cardPlayAgainHelper";

const NumbersGame: React.FC = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState<(number | string)[]>(
        []
    );
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
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

    const handleCardClick = (clickedCard: string | number) => {
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

    const handlePlayAgain = (event: React.MouseEvent) => {
        event.preventDefault();
        cardsPlayAgainHelper(
            setCurrentWordIndex,
            setGameOver,
            setSelectedNumbers,
            numbersOnCards,
            currentWordIndex
        );
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={numbersInWords}
                cards={selectedNumbers}
                currentWordIndex={currentWordIndex}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style="cards-with-text"
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName="find-numbers-game"
                />
            )}
        </>
    );
};

export default NumbersGame;
