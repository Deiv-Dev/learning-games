import { shuffleArray } from "./shuffleArrayHelper";
import { generatingArrayWithRandomValuesAndCorrectValues } from "./generatingArrayHelper";
import { resetScoreCount } from "./scoreCountHelper";
import { startTimer } from "./countTimeHelper";

export const cardsPlayAgainHelper = (
    setCurrentValueIndex: (index: number) => void,
    setGameOver: (gameOver: boolean) => void,
    setSelectedValue: (values: Array<string | number>) => void,
    array: Array<string | number>,
    currentIndex: number
): void => {
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
