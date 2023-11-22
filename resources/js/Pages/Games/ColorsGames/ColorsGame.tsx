import React, { useState, useEffect } from "react";
import { shuffleTwoArraysParallel } from "../../../Helpers/shuffleArrayHelper";
import { colorsOnCards, colorsInWords } from "./ColorsGameData";
import FeedbackMessageComponent from "../../../Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "../../../Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "../../../Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../Helpers/countTimeHelper";
import { handleCardClickHelper } from "../../../Helpers/cardClickedHelper";
import { cardsPlayAgainHelper } from "../../../Helpers/cardPlayAgainHelper";

const ColorsGame: React.FC = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState<number>(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [gameOver, setGameOver] = useState<boolean>(false);
    const [shuffledColors, setShuffledColors] = useState<(number | string)[]>(
        []
    );
    const [colorsToCompareWithWords, setColorsToCompareWithWords] = useState<
        (number | string)[]
    >([]);
    const [shuffledColorsInWords, setShuffledColorsInWords] = useState<
        (number | string)[]
    >([]);

    useEffect(() => {
        const { firstArray, secondArray } = shuffleTwoArraysParallel(
            colorsOnCards,
            colorsInWords
        );
        sliceArrays(firstArray, secondArray);
        startTimer();
    }, []);

    const sliceArrays = (
        firstArray: (number | string)[],
        secondArray: (number | string)[]
    ) => {
        setShuffledColors(firstArray.slice(0, 9));
        setColorsToCompareWithWords(firstArray.slice(0, 9));
        setShuffledColorsInWords(secondArray.slice(0, 9));
    };

    const handleCardClick = (clickedCard: string) => {
        handleCardClickHelper({
            clickedCard,
            valuesOnCards: colorsToCompareWithWords,
            currentValueIndex: currentColorIndex,
            gameOver,
            setIsCorrect,
            setGameOver,
            setCorrectAnswersIndex: setCurrentColorIndex,
            setValuesToDisplayOnCards: setShuffledColors,
        });
    };

    const handlePlayAgain = (event: React.MouseEvent) => {
        event.preventDefault();
        const { firstArray, secondArray } = shuffleTwoArraysParallel(
            colorsOnCards,
            colorsInWords
        );
        sliceArrays(firstArray, secondArray);
        cardsPlayAgainHelper(
            setCurrentColorIndex,
            setGameOver,
            setShuffledColors,
            shuffledColors,
            currentColorIndex
        );
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={shuffledColorsInWords}
                cards={shuffledColors}
                currentWordIndex={currentColorIndex}
                colors={shuffledColors}
                style="cards-without-text"
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName="colors-game"
                />
            )}
        </>
    );
};

export default ColorsGame;
