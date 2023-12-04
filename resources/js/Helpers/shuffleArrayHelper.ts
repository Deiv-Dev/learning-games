export function shuffleArray<T>(array: T[]): T[] {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j]!,
            shuffledArray[i]!,
        ];
    }

    return shuffledArray;
}

export function shuffleTwoArraysParallel(
    arrayOne: Array<string | number>,
    arrayTwo: Array<string | number>
): { firstArray: Array<string | number>; secondArray: Array<string | number> } {
    const colorWordPairs = arrayOne.map((value, index) => ({
        firstArray: value,
        secondArray: arrayTwo[index]!,
    }));

    const shuffledPairs = shuffleArray(colorWordPairs);

    const firstArray = shuffledPairs.map((pair) => pair.firstArray);
    const secondArray = shuffledPairs.map((pair) => pair.secondArray);

    return { firstArray, secondArray };
}
