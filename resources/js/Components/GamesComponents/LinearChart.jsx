import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart,
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from "chart.js";

Chart.register(
    LinearScale,
    CategoryScale,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);
const LinearChart = ({ score, time, createdAt }) => {
    console.log(createdAt);
    const data = {
        labels: createdAt,
        datasets: [
            {
                label: "Daily Scores",
                data: score,
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.1,
                fill: {
                    target: "origin",
                    above: "rgba(75, 192, 192, 0.2)",
                },
            },
            {
                label: "Laikas",
                data: time,
                borderColor: "rgba(255, 99, 132, 1)",
                tension: 0.1,
                fill: {
                    target: "origin",
                    above: "rgba(255, 99, 132, 0.2)",
                },
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: "category",
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default LinearChart;
