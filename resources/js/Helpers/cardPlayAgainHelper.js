import { shuffleArray } from "./shuffleArrayHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "./generatingArrayHelper";
import { resetScoreCount } from "./scoreCountHelper";
import { startTimer } from "./countTimeHelper";

export const cardsPlayAgainHelper = (
    setCurrentValueIndex,
    setGameOver,
    setSelectedValue,
    array,
    currentIndex
) => {
    setCurrentValueIndex(0);
    setGameOver(false);
    resetScoreCount();
    setSelectedValue(
        shuffleArray(
            generatingArrayWithRandomValuesAndCorrectValues(array, currentIndex)
        )
    );
    startTimer();
};
