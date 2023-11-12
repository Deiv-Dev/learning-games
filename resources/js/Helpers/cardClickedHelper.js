import { countCorrectPress, countWrongPress } from "./scoreCountHelper";
import { shuffleArray } from "./shuffleArrayHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "./generatingArrayHelper";

export const handleCardClickHelper = (clickedCard) => {
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
