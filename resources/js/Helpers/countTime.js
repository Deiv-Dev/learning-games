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
    return formatElapsedTime(elapsedTime);
};

const formatElapsedTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds / 1000) % 60);
    return `${minutes} min ${seconds} sec`;
};
