export const generatingArrayWithRandomValuesAndCorrectValues = (
    arrayCorect,
    curentIndexToTake
) => {
    const randomValues = [arrayCorect[curentIndexToTake]];

    while (randomValues.length < 9) {
        const randomIndex = Math.floor(Math.random() * arrayCorect.length);
        const randomValue = arrayCorect[randomIndex];

        if (!randomValues.includes(randomValue)) {
            randomValues.push(randomValue);
        }
    }

    return randomValues;
};
