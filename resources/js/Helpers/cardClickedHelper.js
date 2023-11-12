import { countCorrectPress, countWrongPress } from "./scoreCountHelper";
import { shuffleArray } from "./shuffleArrayHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "./generatingArrayHelper";

export const handleCardClickHelper = (clickedCard) => {
    if (clickedCard.gameOver) return;

    const correctCardToClick =
        clickedCard.valuesOnCards[clickedCard.currentValueIndex];
    if (clickedCard.clickedCard === correctCardToClick) {
        clickedCard.setIsCorrect(true);
        countCorrectPress();
        setTimeout(() => {
            clickedCard.setIsCorrect(null);
            const nextIndex =
                (clickedCard.currentValueIndex + 1) %
                clickedCard.valuesOnCards.length;
            if (nextIndex === 0) {
                clickedCard.setGameOver(true);
            }
            clickedCard.setCorrectAnswersIndex(nextIndex);
            clickedCard.setValuesToDisplayOnCards(
                shuffleArray(
                    generatingArrayWithRandomValuesAndCorrectValues(
                        clickedCard.valuesOnCards,
                        clickedCard.currentValueIndex
                    )
                )
            );
        }, 500);
    } else {
        clickedCard.setIsCorrect(false);
        countWrongPress();
        setTimeout(() => {
            clickedCard.setIsCorrect(null);
        }, 500);
    }
};
