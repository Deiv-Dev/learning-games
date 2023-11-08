export const handleCardClick = (
    clickedCard,
    currentWordIndex,
    numbersOnCards,
    colorsToCompareWithWords,
    shuffledColors,
    setIsCorrect,
    countCorrectPress,
    countWrongPress,
    setCurrentWordIndex,
    setGameOver,
    generateUniqueRandomNumbers
) => {
    if (gameOver) return;

    if (colorsToCompareWithWords) {
        const currentColor = colorsToCompareWithWords[currentWordIndex];
        if (clickedCard === currentColor) {
            setShuffledColors(shuffleArray(shuffledColors));
        }
    } else {
        const correctNumber = numbersOnCards[currentWordIndex];
        if (clickedCard === correctNumber) {
            generateUniqueRandomNumbers();
        }
    }

    setIsCorrect(
        clickedCard ===
            (colorsToCompareWithWords ? currentColor : correctNumber)
    );
    countCorrectPress();
    setTimeout(() => {
        setIsCorrect(null);
        const nextIndex =
            (currentWordIndex + 1) %
            (colorsToCompareWithWords ? 9 : numbersInWords.length);
        if (nextIndex === 0) {
            setGameOver(true);
        }
        setCurrentWordIndex(nextIndex);
    }, 500);
};
