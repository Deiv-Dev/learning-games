let wrongCount: number = 0;
let correctCount: number = 0;

export const countWrongPress = (): void => {
    wrongCount += 1;
};

export const countCorrectPress = (): void => {
    correctCount += 1;
};

export const resetScoreCount = (): void => {
    wrongCount = 0;
    correctCount = 0;
};

export const score = (): number => {
    return wrongCount === 0
        ? 100
        : Math.round((correctCount / (correctCount + wrongCount)) * 100);
};

export const getWrongScoreCount = (): number => wrongCount;

export const getCorrectScoreCount = (): number => correctCount;
