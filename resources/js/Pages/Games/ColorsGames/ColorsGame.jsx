import React, { useState, useEffect } from "react";
import { shuffleTwoArraysParallel } from "../../../Helpers/shuffleArrayHelper";
import { colorsOnCards, colorsInWords } from "./ColorsGameData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../Helpers/countTimeHelper";
import { resetScoreCount } from "@/Helpers/scoreCountHelper";
import { handleCardClickHelper } from "@/Helpers/cardClickedHelper";

const ColorsGame = () => {
    const [currentColorIndex, setCurrentColorIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [shuffledColors, setShuffledColors] = useState([]);
    const [colorsToCompareWithWords, setColorsToCompareWithWords] = useState(
        []
    );
    const [shuffledColorsInWords, setShuffledColorsInWords] = useState([]);

    useEffect(() => {
        const { slicedColors, slicedWords } = shuffleTwoArraysParallel(
            colorsOnCards,
            colorsInWords
        );
        setShuffledColors(slicedColors.slice(0, 9));
        setColorsToCompareWithWords(slicedColors.slice(0, 9));
        setShuffledColorsInWords(slicedWords.slice(0, 9));

        startTimer();
    }, []);

    const handleCardClick = (clickedCard) => {
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

    const handlePlayAgain = () => {
        setCurrentColorIndex(0);
        setGameOver(false);
        resetScoreCount();
        startTimer();
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={shuffledColorsInWords}
                cards={shuffledColors}
                currentWordIndex={currentColorIndex}
                colors={shuffledColors}
                style={"cards-without-text"}
            />
            <FeedbackMessageComponent isCorrect={isCorrect} />
            {gameOver && (
                <GameOverComponent
                    handlePlayAgain={handlePlayAgain}
                    endTimer={endTimer}
                    gameName={"colors-game"}
                />
            )}
        </>
    );
};

export default ColorsGame;
