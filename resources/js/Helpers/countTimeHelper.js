let startTime;

export const startTimer = () => {
    startTime = Date.now();
    return startTime;
};

export const endTimer = () => {
    if (!startTime) {
        return "Timer not started";
    }
    const elapsedTime = Date.now() - startTime;
    return elapsedTime;
};

export const formatElapsedTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${minutes} min ${seconds} sec`;
};

export const convertToMinutesSeconds = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    const time = minutes + remainingSeconds / 60;
    return time.toFixed(2);
};
