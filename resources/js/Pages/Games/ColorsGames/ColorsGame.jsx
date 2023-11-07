import React, { useState, useEffect } from "react";
import "./ColorsGames.scss";
import { shuffleArray } from "../../../Helpers/shuffleArray";
import { colors, colorsInWords } from "./ColorsGameData";
import FeedbackMessageComponent from "@/Components/GamesComponents/FeedbackMessage/FeedbackMessageComponent";
import GameOverComponent from "@/Components/GamesComponents/GameOver/GameOverComponent";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { startTimer, endTimer } from "../../../Helpers/countTime";
import {
    countCorrectPress,
    countWrongPress,
    resetScoreCount,
} from "@/Helpers/scoreCount";

const ColorsGame = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isCorrect, setIsCorrect] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [shuffledColors, setShuffledColors] = useState([]);
    const [colorsToCompareWithWords, setColorsToCompareWithWords] = useState(
        []
    );
    const [shuffledColorsInWords, setShuffledColorsInWords] = useState([]);

    useEffect(() => {
        const colorWordPairs = colors.map((color, index) => ({
            color,
            word: colorsInWords[index],
        }));
        const shuffledPairs = shuffleArray(colorWordPairs);

        const slicedColors = shuffledPairs
            .slice(0, 9)
            .map((pair) => pair.color);
        const slicedWords = shuffledPairs.slice(0, 9).map((pair) => pair.word);

        setShuffledColors(slicedColors);
        setColorsToCompareWithWords(slicedColors);
        setShuffledColorsInWords(slicedWords);

        startTimer();
    }, []);

    const handleCardClick = (clickedCard) => {
        if (gameOver) return;

        const currentColor = colorsToCompareWithWords[currentWordIndex];
        if (clickedCard === currentColor) {
            setShuffledColors(shuffleArray(shuffledColors));
            setIsCorrect(true);
            countCorrectPress();
            setTimeout(() => {
                setIsCorrect(null);
                const nextIndex = (currentWordIndex + 1) % 9;
                if (nextIndex === 0) {
                    setGameOver(true);
                }
                setCurrentWordIndex(nextIndex);
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
        startTimer();
    };

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={shuffledColorsInWords}
                cards={shuffledColors}
                currentWordIndex={currentWordIndex}
                colors={shuffledColors}
                style={"colors-game"}
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
