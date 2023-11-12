export function shuffleArray(array) {
    const shuffledArray = [...array];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
            shuffledArray[j],
            shuffledArray[i],
        ];
    }

    return shuffledArray;
}

export function shuffleTwoArraysParallel(arrayOne, arrayTwo) {
    const colorWordPairs = arrayOne.map((array, index) => ({
        firstArray: array,
        secondArray: arrayTwo[index],
    }));

    const shuffledPairs = shuffleArray(colorWordPairs);

    const slicedColors = shuffledPairs.map((pair) => pair.firstArray);
    const slicedWords = shuffledPairs.map((pair) => pair.secondArray);

    return { slicedColors, slicedWords };
}