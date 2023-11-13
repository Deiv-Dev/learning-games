export const generatingArrayWithRandomValuesAndCorrectValues = (
    arrayCorrect,
    currentIndexToTake
) => {
    const randomValues = [arrayCorrect[currentIndexToTake]];

    while (randomValues.length < 9) {
        const randomValue =
            arrayCorrect[Math.floor(Math.random() * arrayCorrect.length)];
        if (!randomValues.includes(randomValue)) randomValues.push(randomValue);
    }

    return randomValues;
};
