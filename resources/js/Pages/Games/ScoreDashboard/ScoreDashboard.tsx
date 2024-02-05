import React, { useState, useEffect } from "react";
import Axios from "axios";
import LinearChart from "../../../Components/GamesComponents/LinearChart";
import { convertToMinutesSeconds } from "../../../Helpers/countTimeHelper";

interface ScoreData {
    created_at: string;
    score: number;
    game_duration_milliseconds: number;
}

interface ScoreDashboardProps {
    name: string;
}

const ScoreDashboard = ({ name }: ScoreDashboardProps) => {
    const [score, setScore] = useState<number[]>([]);
    const [time, setTime] = useState<number[]>([]);
    const [createdAt, setCreatedAt] = useState<string[]>([]);

    useEffect(() => {
        Axios.get<ScoreData[]>(`/api/find-games-score/${name}`)
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
