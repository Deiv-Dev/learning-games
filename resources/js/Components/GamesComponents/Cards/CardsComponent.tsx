import React from "react";
import "./Cards.Component.scss";

interface CardsComponentProps {
    handleCardClick: (card: string) => void;
    wordsToFind: string[];
    cards: string[];
    currentWordIndex: number;
    colors: string[];
    style: "cards-with-text" | "cards-without-text";
}

const CardsComponent: React.FC<CardsComponentProps> = ({
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
                >
                    <p className={style}>{card}</p>
                </div>
            ))}
        </div>
    );
};

export default CardsComponent;
