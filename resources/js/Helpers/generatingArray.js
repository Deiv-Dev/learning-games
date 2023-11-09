export const generatingArrayWithRandomValuesAndCorrectValues = (
    arrayCorrect,
    currentIndexToTake
) => {
    const randomValues = [arrayCorrect[currentIndexToTake]];

    while (randomValues.length < 9) {
        const randomIndex = Math.floor(Math.random() * arrayCorrect.length);
        const randomValue = arrayCorrect[randomIndex];

        if (!randomValues.includes(randomValue)) {
            randomValues.push(randomValue);
        }
    }

    return randomValues;
};
