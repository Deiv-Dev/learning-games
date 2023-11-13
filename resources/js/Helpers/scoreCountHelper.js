let wrongCount = 0;
let correctCount = 0;

export const countWrongPress = () => (wrongCount += 1);

export const countCorrectPress = () => (correctCount += 1);

export const resetScoreCount = () => {
    wrongCount = 0;
    correctCount = 0;
};
export const score = () =>
    wrongCount === 0
        ? 100
        : Math.round((correctCount / (correctCount + wrongCount)) * 100);

export const getWrongScoreCount = () => wrongCount;

export const getCorrectScoreCount = () => correctCount;
