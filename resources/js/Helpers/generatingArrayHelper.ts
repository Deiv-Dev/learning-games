export const generatingArrayWithRandomValuesAndCorrectValues = (
    arrayCorrect: Array<string | number>,
    currentIndexToTake: number
): Array<string | number> => {
    const randomValues: Array<string | number> = [
        arrayCorrect[currentIndexToTake],
    ];

    while (randomValues.length < 9) {
        const randomValue =
            arrayCorrect[Math.floor(Math.random() * arrayCorrect.length)];
        if (!randomValues.includes(randomValue)) randomValues.push(randomValue);
    }

    return randomValues;
};
