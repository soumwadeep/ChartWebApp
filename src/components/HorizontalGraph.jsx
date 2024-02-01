import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["About us", "About Product", "Delegation", "Time Management"],
  datasets: [
    {
      label: "Completed",
      data: [100, 62, 40, 50],
      backgroundColor: "#00C49A",
    },
    {
      label: "Not started",
      data: [20, 10, 30, 20],
      backgroundColor: "#EE6C4D",
    },
    {
      label: "Partially completed",
      data: [60, 60, 90, 30],
      backgroundColor: "#619BFF",
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
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Module-wise Completion",
    },
  },
};

const HorizontalGraph = () => {
  return (
    <center>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
    </center>
  );
};

export default HorizontalGraph;
