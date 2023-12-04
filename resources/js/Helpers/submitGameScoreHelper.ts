import axios from "axios";

export const submitGameScore = async (
    gameName: string,
    endTimer: () => string | number,
    score: number
): Promise<void> => {
    const formData = {
        game_name: gameName,
        score: score,
        game_duration_milliseconds: endTimer(),
    };

    try {
        await axios.post("/api/game_scores", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Game score added successfully");
    } catch (error) {
        console.error("Error adding game score:", error);
    }
};
