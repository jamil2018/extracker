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
