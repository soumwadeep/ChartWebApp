import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const data = {
  labels: ["About Us", "About Product", "Delegation", "Time Management"],
  datasets: [
    {
      label: "Completed",
      data: [15, 20, 10, 20],
      backgroundColor: "#00C49A",
    },
    {
      label: "Not started",
      data: [55, 25, 75, 55],
      backgroundColor: "#EE6C4D",
    },
    {
      label: "Partially completed",
      data: [30, 55, 15, 25],
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
      borderWidth: 1,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Module-Wise Completion",
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
