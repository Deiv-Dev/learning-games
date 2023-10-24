import React, { useState, useEffect } from "react";
import "./NumberGames.scss";

const GridWithNumbers = () => {
    const numbersInWords = [
        "vienas",
        "du",
        "trys",
        "keturi",
        "penki",
        "šeši",
        "septyni",
        "aštuoni",
        "devyni",
        "dešimt",
    ];

    const numbersOnCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const colors = [
        "#FF5733",
        "#FFC300",
        "#C70039",
        "#900C3F",
        "#00A8CC",
        "#00CC00",
        "#FF5733",
        "#FFC300",
        "#C70039",
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [isCorrect, setIsCorrect] = useState(null);

    const generateUniqueRandomNumbers = () => {
        const randomNumbers = [currentWordIndex + 1]; // Initialize with the correct number

        while (randomNumbers.length < 9) {
            const randomIndex = Math.floor(
                Math.random() * numbersOnCards.length
            );
            const randomNum = numbersOnCards[randomIndex];
            if (!randomNumbers.includes(randomNum)) {
                randomNumbers.push(randomNum);
            }
        }

        // Shuffle the randomNumbers array
        for (let i = randomNumbers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randomNumbers[i], randomNumbers[j]] = [
                randomNumbers[j],
                randomNumbers[i],
            ];
        }

        setSelectedNumbers(randomNumbers);
    };

    const handleCardClick = (clickedNumber) => {
        const correctNumber = numbersOnCards[currentWordIndex];
        if (clickedNumber === correctNumber) {
            setIsCorrect(true);
            setTimeout(() => {
                setIsCorrect(null);
                setCurrentWordIndex(
                    (prevIndex) => (prevIndex + 1) % numbersInWords.length
                );
                generateUniqueRandomNumbers();
            }, 1500); // Adjust the time as needed
        } else {
            setIsCorrect(false);
            setTimeout(() => {
                setIsCorrect(null);
            }, 1500); // Adjust the time as needed
        }
    };

    useEffect(() => {
        generateUniqueRandomNumbers();
        setIsCorrect(null);
    }, [currentWordIndex]);

    return (
        <>
            <div className="numbers-grid-container">
                <div className="number-word">
                    <p className="number-word-text">
                        {numbersInWords[currentWordIndex]}
                    </p>
                </div>
                {selectedNumbers.map((number, index) => (
                    <div
                        key={number}
                        className="numbers-grid-item"
                        style={{ backgroundColor: colors[index] }}
                        onClick={() => handleCardClick(number)}
                    >
                        {number}
                    </div>
                ))}
            </div>
            <div className="feedback-message">
                {isCorrect === true && <p>Correct!</p>}
                {isCorrect === false && <p>Wrong! Try again.</p>}
            </div>
        </>
    );
};

export default GridWithNumbers;
