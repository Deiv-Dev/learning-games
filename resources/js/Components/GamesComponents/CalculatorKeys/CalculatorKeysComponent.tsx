import React from "react";
import CardsComponent from "../Cards/CardsComponent";
import { getRandomLightColor } from "../../../Helpers/generateLightRandomColorsHelper";
import correct from "../../../Images/correct.svg";
import back from "../../../Images/back.svg";

interface CalculatorKeysComponentProps {
    randomBackgroundColors: string;
    randomNumbersToAdd: number[];
    handleCardClick: (card: number | string) => void;
    answer: number;
}

const CalculatorKeysComponent = ({
    randomBackgroundColors,
    randomNumbersToAdd,
    handleCardClick,
    answer,
}: CalculatorKeysComponentProps) => {
    return (
        <div className="add-numbers-grid-container">
            <div
                className="add-numbers-grid-container__counter "
                style={{ backgroundColor: randomBackgroundColors }}
            >
                <p className="add-numbers-grid-container__counter__text">
                    {randomNumbersToAdd[0]} + {randomNumbersToAdd[1]} = {answer}
                </p>
            </div>

            <CardsComponent
                handleCardClick={handleCardClick}
                wordsToFind={[0]}
                cards={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                currentWordIndex={0}
                colors={Array.from({ length: 9 }, () => getRandomLightColor())}
                style="cards-with-text"
            />
            <div className="cards__component">
                <div
                    className="cards__component__card"
                    style={{ backgroundColor: randomBackgroundColors }}
                    onClick={() => handleCardClick("back")}
                >
                    <img
                        className="cards__component__card__svg"
                        src={back}
                        alt="back"
                    />
                </div>

                <div
                    className="cards__component__card"
                    style={{ backgroundColor: randomBackgroundColors }}
                    onClick={() => handleCardClick(0)}
                >
                    <p>0</p>
                </div>

                <div
                    className="cards__component__card"
                    style={{ backgroundColor: randomBackgroundColors }}
                    onClick={() => handleCardClick("submit")}
                >
                    <img
                        className="cards__component__card__svg"
                        src={correct}
                        alt="correct"
                    />
                </div>
            </div>
        </div>
    );
};

export default CalculatorKeysComponent;
