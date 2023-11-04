import React, { useState, useEffect } from "react";
import "./GameOverComponent.scss";
import { score } from "@/Helpers/scoreCount";
import { formatElapsedTime } from "@/Helpers/countTime";

const GameOverComponent = ({ handlePlayAgain, endTimer, gameName }) => {
    const [formData, setFormData] = useState({
        game_name: gameName,
        score: score(),
        game_duration_milliseconds: endTimer(),
    });

    useEffect(() => {
        const submitData = async () => {
            try {
                const response = await fetch("/game_scores", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log("Game score added successfully");
                } else {
                    console.error(
                        "Server responded with an error:",
                        response.status
                    );
                }
            } catch (error) {
                console.error("Error adding game score:", error);
            }
        };

        submitData();
    }, []);

    return (
        <div className="center-button">
            <form>
                <div>
                    <button onClick={handlePlayAgain}>Žaisti dar kartą</button>
                </div>
                <div className="counters">
                    <p>Taskai: {score()}</p>
                    <p>Trukmė: {formatElapsedTime(endTimer())}</p>
                </div>
            </form>
        </div>
    );
};

export default GameOverComponent;
