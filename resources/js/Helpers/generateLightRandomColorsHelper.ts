export const getRandomLightColor = (): string => {
    return `rgb(${Math.random() * 128 + 128}, ${Math.random() * 128 + 128}, ${
        Math.random() * 128 + 128
    })`;
};
