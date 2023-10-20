import React, { useState, useEffect } from "react";
import "./NumberGames.scss";

const GridWithNumbers = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [showNumbers, setShowNumbers] = useState(false);
    const colors = [
        "#FF5733",
        "#FFC300",
        "#C70039",
        "#900C3F",
        "#00A8CC",
        "#00CC00",
        "#FF5733",
        "#FFC300",
        "#C70039",
    ];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowNumbers(true);
        }, 5000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="numbers-grid-container">
            {numbers.map((number, index) => (
                <div
                    key={number}
                    className="numbers-grid-item"
                    style={{ backgroundColor: colors[index] }}
                >
                    {showNumbers ? number : " "}
                </div>
            ))}
        </div>
    );
};

export default GridWithNumbers;