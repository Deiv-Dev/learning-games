import { countCorrectPress, countWrongPress } from "./scoreCountHelper";
import { shuffleArray } from "./shuffleArrayHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "./generatingArrayHelper";

interface Card {
    gameOver: boolean;
    valuesOnCards: Array<number | string>;
    currentValueIndex: number;
    clickedCard: number | string;
    setIsCorrect: (isCorrect: boolean | null) => void;
    setGameOver: (gameOver: boolean) => void;
    setCorrectAnswersIndex: (index: number) => void;
    setValuesToDisplayOnCards: (values: Array<string | number>) => void;
}

export const handleCardClickHelper = (clickedCard: Card): void => {
    if (clickedCard.gameOver) return;

    const correctCardToClick =
        clickedCard.valuesOnCards[clickedCard.currentValueIndex];
    const isCorrect = clickedCard.clickedCard === correctCardToClick;

    clickedCard.setIsCorrect(isCorrect);
    isCorrect ? countCorrectPress() : countWrongPress();

    setTimeout(() => {
        clickedCard.setIsCorrect(null);

        if (isCorrect) {
            const nextIndex =
                (clickedCard.currentValueIndex + 1) %
                clickedCard.valuesOnCards.length;
            clickedCard.setGameOver(nextIndex === 0);
            clickedCard.setCorrectAnswersIndex(nextIndex);
            clickedCard.setValuesToDisplayOnCards(
                shuffleArray(
                    generatingArrayWithRandomValuesAndCorrectValues(
                        clickedCard.valuesOnCards,
                        clickedCard.currentValueIndex
                    )
                )
            );
        }
    }, 500);
};
