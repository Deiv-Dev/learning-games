let wrongCount = 0;
let correctCount = 0;

export const countWrongPress = () => {
    wrongCount += 1;
};

export const countCorrectPress = () => {
    correctCount += 1;
};

export const resetScoreCount = () => {
    wrongCount = 0;
    correctCount = 0;
};

export const score = () => {
    if (wrongCount === 0) {
        return 100;
    }

    const totalAnswers = correctCount + wrongCount;
    const calculatedScore = (correctCount / totalAnswers) * 100;

    return Math.round(Math.max(calculatedScore, 0));
};

export const getWrongScoreCount = () => wrongCount;
export const getCorrectScoreCount = () => correctCount;
