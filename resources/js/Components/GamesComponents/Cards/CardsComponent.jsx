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
    const cardClassName =
        style === "cards-with-text"
            ? "cards__component__card"
            : "cards__component__card cards__component__card--colors";
    return (
        <div className="cards__component">
            <div className="cards__component__header">
                <p className="cards__component__title">
                    {wordsToFind[currentWordIndex]}
                </p>
            </div>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className={cardClassName}
                    style={{ backgroundColor: colors[index] }}
                    onClick={() => handleCardClick(card)}
                >
                    <p className="cards__component__card__text">{card}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;
