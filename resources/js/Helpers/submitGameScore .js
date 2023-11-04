export const submitGameScore = async (gameName, endTimer, score) => {
    const formData = {
        game_name: gameName,
        score: score,
        game_duration_milliseconds: endTimer(),
    };

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
            console.error("Server responded with an error:", response.status);
        }
    } catch (error) {
        console.error("Error adding game score:", error);
    }
};
