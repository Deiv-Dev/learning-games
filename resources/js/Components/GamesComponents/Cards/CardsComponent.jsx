import React from "react";
import "./Cards.Component.scss";

const CardsComponent = ({
    handleCardClick,
    wordsToFind,
    cards,
    currentWordIndex,
    colors,
    style,
}) => {
    const className =
        style === "numbers-game"
            ? "numbers-grid-item"
            : "numbers-grid-item colors-numbers-grid-item";
    return (
        <div className="numbers-grid-container">
            <div className="number-word">
                <p className="number-word-text">
                    {wordsToFind[currentWordIndex]}
                </p>
            </div>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={className}
                    style={{ backgroundColor: colors[index] }}
                    onClick={() => handleCardClick(card)}
                >
                    <p className="card-text">{card}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;
