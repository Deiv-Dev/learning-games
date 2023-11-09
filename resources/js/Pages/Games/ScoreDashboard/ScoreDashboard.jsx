import React, { useState, useEffect } from "react";
import Axios from "axios";
import LinearChart from "@/Components/GamesComponents/LinearChart";
import { convertToMinutesSeconds } from "@/Helpers/countTime";

const ScoreDashboard = ({ name }) => {
    const [score, setScore] = useState([]);
    const [time, setTime] = useState([]);
    const [createdAt, setCreatedAt] = useState([]);

    useEffect(() => {
        Axios.get(`/api/find-games-score/${name}`)
            .then((response) => {
                const timeStampsArray = response.data.map(
                    (scoreData) => scoreData.created_at
                );
                const scoresArray = response.data.map(
                    (scoreData) => scoreData.score
                );
                const timesArray = response.data.map((scoreData) =>
                    convertToMinutesSeconds(
                        scoreData.game_duration_milliseconds
                    )
                );
                setCreatedAt(timeStampsArray);
                setScore(scoresArray);
                setTime(timesArray);
            })
            .catch((error) => {
                console.error("API request error:", error);
            });
    }, [name]);

    return (
        <div>
            <h2>Line Chart for {name}</h2>

            <LinearChart score={score} time={time} createdAt={createdAt} />
        </div>
    );
};

export default ScoreDashboard;
