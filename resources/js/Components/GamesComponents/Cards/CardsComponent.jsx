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
            : "cards__component__card cards__component__card--text";
    return (
        <div className="cards__component">
            <div className="cards__component__header">
                <p className="cards__component__title">
                    {wordsToFind[currentWordIndex]}
                </p>
            </div>
            {cards.map((card, index) => (
                <div
                    key={card}
                    className={cardClassName}
                    style={{ backgroundColor: colors[index] }}
                    onClick={() => handleCardClick(card)}
                    onKeyDown={(e) => handleKeyDown(e, card)}
                >
                    <p className={style}>{card}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;
