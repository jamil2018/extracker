import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// {
//     label: "Hours Worked",
//     data: [7.5, 8, 8.5, 6.5, 10.0],
//     backgroundColor: "rgba(255, 99, 132, 0.5)",
//   },

const BarChart = ({ chartTitle, labels, datasets, legendPosition }) => {
  const theme = useTheme();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: legendPosition,
      },
      title: {
        display: true,
        text: chartTitle,
      },
    },
  };
  const data = {
    labels,
    datasets,
  };
  return <Bar height={theme.spacing(13)} options={options} data={data} />;
};

export default BarChart;
