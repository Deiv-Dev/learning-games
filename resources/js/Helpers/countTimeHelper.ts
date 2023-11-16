let startTime: number = 0;

export const startTimer = (): void => {
    startTime = Date.now();
};

export const endTimer = (): number | string => {
    return startTime ? Date.now() - startTime : "Timer not started";
};

export const formatElapsedTime = (milliseconds: number): string => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${minutes} min ${seconds} sec`;
};

export const convertToMinutesSeconds = (milliseconds: number): string => {
    return ((Math.floor(milliseconds / 1000) % 3600) / 60).toFixed(2);
};
