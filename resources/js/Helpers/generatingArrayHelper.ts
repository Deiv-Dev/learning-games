export const generatingArrayWithRandomValuesAndCorrectValues = (
    arrayCorrect: Array<string | number>,
    currentIndexToTake: number
): Array<string | number> => {
    const initialValue = arrayCorrect[currentIndexToTake];

    if (initialValue === undefined) {
        // Handle the case where the value is undefined, maybe return an empty array or throw an error.
        return [];
    }

    const randomValues: Array<string | number> = [initialValue];

    while (randomValues.length < 9) {
        const randomIndex = Math.floor(Math.random() * arrayCorrect.length);
        const randomValue = arrayCorrect[randomIndex];

        if (randomValue !== undefined && !randomValues.includes(randomValue)) {
            randomValues.push(randomValue);
        }
    }

    return randomValues;
};
