import React, { useState, useEffect } from "react";
import "./NumberGames.scss";
import wrong from "./images/X_mark.svg";
import correct from "./images/icons8-done-480.png";

const GridWithNumbers = () => {
    const numbersInWords = [
        "Vienas",
        "Du",
        "Trys",
        "Keturi",
        "Penki",
        "Šeši",
        "Septyni",
        "Aštuoni",
        "Devyni",
        "Dešimt",
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
    const [gameOver, setGameOver] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [wrongCount, setWrongCount] = useState(0);

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
        if (gameOver) return; // Don't handle clicks if the game is over

        const correctNumber = numbersOnCards[currentWordIndex];
        if (clickedNumber === correctNumber) {
            setIsCorrect(true);
            setCorrectCount((count) => count + 1); // Increase the correct count
            setTimeout(() => {
                setIsCorrect(null);
                const nextIndex =
                    (currentWordIndex + 1) % numbersInWords.length;
                if (nextIndex === 0) {
                    // Game over, all words have been played
                    setGameOver(true);
                }
                setCurrentWordIndex(nextIndex);
                generateUniqueRandomNumbers();
            }, 500); // Adjust the time as needed
        } else {
            setIsCorrect(false);
            setWrongCount((count) => count + 1); // Increase the wrong count
            setTimeout(() => {
                setIsCorrect(null);
            }, 500); // Adjust the time as needed
        }
    };

    const handlePlayAgain = () => {
        setCurrentWordIndex(0);
        setGameOver(false);
        setCorrectCount(0); // Reset the correct count
        setWrongCount(0); // Reset the wrong count
        generateUniqueRandomNumbers();
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
                {isCorrect === true && <img src={correct} alt="correct" />}
                {isCorrect === false && (
                    <img className="wrong-svg" src={wrong} alt="wrong" />
                )}
            </div>
            {gameOver && (
                <div className="center-button">
                    <div>
                        <button onClick={handlePlayAgain}>
                            Žaisti dar kartą
                        </button>
                    </div>
                    <div className="counters">
                        <p>Teisingi paspaudimai: {correctCount}</p>
                        <p>Neteisingi paspaudimai: {wrongCount}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default GridWithNumbers;
