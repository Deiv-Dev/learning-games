export let isCorrect: boolean | null = null;

export const isCorrectAnimation = (condition: boolean): void => {
    isCorrect = condition;
};

export const getIsCorrectAnimation = (): boolean | null => isCorrect;
