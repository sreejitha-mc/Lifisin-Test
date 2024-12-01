import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["2020", "2021"], 
    datasets: [
      {
        label: "", 
        data: [65, 59], 
        backgroundColor: ["#27648f", "#605233"], 
        borderColor: ["#1f4f6e", "#4a4026", ], 
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "",
      },
    },
  };

  return (
    <div style={{ width: "150px", height: "150px" }}>
      <Bar data={data} options={options} width={150} height={150}/>
    </div>
  );
};

export default BarChart;