import React, { useState } from "react";
import "./ColorsGames.scss";
import CardsComponent from "@/Components/GamesComponents/Cards/CardsComponent";
import { shuffleArray } from "@/Helpers/shuffleArray";
import { colors, colorsInWords } from "./ColorsGameData";

const ColorsGame = () => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    // const [selectedNumbers, setSelectedNumbers] = useState([]);
    // const [isCorrect, setIsCorrect] = useState(null);
    // const [gameOver, setGameOver] = useState(false);

    const shuffle = shuffleArray(colors);
    const shuffledColors = shuffle.slice(0, 9);
    const handleCardClick = () => {
        if (gameOver) return;
        // const shuffledColors = [currentWordIndex + 1];
        // const correctNumber = numbersOnCards[currentWordIndex];
        // if (clickedNumber === correctNumber) {
        // } else {
        // }
    };
    console.log(colorsInWords);
    return (
        <>
            <CardsComponent
                handleCardClick={handleCardClick}
                numbersInWords={colorsInWords}
                selectedNumbers={shuffledColors}
                currentWordIndex={currentWordIndex}
                colors={colors}
                style={2}
            />
        </>
    );
};

export default ColorsGame;
