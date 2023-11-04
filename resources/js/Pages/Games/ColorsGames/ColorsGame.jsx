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

    const handleCardClick = (clickedCard) => {
        if (gameOver) return;

        const currentColor = colors[currentWordIndex];
        if (clickedCard === currentColor) {
            setShuffledColors(shuffleArray(colors.slice(0, 9)));
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

    useEffect(() => {
        setShuffledColors(shuffleArray(colors.slice(0, 9)));
        startTimer();
    }, []);

    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={colorsInWords}
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
                    gameName={"ColorsGame"}
                />
            )}
        </>
    );
};

export default ColorsGame;
