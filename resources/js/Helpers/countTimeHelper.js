let startTime;

export const startTimer = () => (startTime = Date.now());

export const endTimer = () =>
    startTime ? Date.now() - startTime : "Timer not started";

export const formatElapsedTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${minutes} min ${seconds} sec`;
};

export const convertToMinutesSeconds = (milliseconds) =>
    ((Math.floor(milliseconds / 1000) % 3600) / 60).toFixed(2);
