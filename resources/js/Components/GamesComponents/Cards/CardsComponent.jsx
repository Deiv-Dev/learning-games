import React from "react";
import "./Cards.Component.scss";

const CardsComponent = ({
    handleCardClick,
    numbersInWords,
    selectedNumbers,
    currentWordIndex,
    colors,
}) => {
    return (
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
    );
};

export default CardsComponent;
