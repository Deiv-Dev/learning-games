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

const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
    datasets: [
        {
            label: "Daily Scores",
            data: [10, 20, 15, 25, 30],
            borderColor: "rgba(75, 192, 192, 1)",
            tension: 0.1,
            fill: {
                target: "origin",
                above: "rgba(75, 192, 192, 0.2)", // Fill color above the line
            },
        },
        {
            label: "Time",
            data: [5, 10, 7, 12, 15], // Add your time data points here
            borderColor: "rgba(255, 99, 132, 1)", // Color for the "Time" line
            tension: 0.1,
            fill: {
                target: "origin",
                above: "rgba(255, 99, 132, 0.2)", // Fill color above the "Time" line
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

const ScoreDashboard = () => {
    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={data} options={options} />
        </div>
    );
};

export default ScoreDashboard;
