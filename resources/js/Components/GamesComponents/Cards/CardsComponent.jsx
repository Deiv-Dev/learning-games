import React from "react";
import "./Cards.Component.scss";

const CardsComponent = ({
    handleCardClick,
    numbersInWords,
    selectedNumbers,
    currentWordIndex,
    colors,
    style,
}) => {
    const className =
        style === 1
            ? "numbers-grid-item"
            : "numbers-grid-item colors-numbers-grid-item";

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
                    className={className}
                    style={{ backgroundColor: colors[index] }}
                    onClick={() => handleCardClick(number)}
                >
                    <p className="card-text">{number}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;
