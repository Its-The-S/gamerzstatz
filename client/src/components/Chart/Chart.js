import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

export default function Chart() {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "BigDaddy420 vs Itali4NStali0nz: MLB The Show: Call of Duty Edition",
      },
    },
  };

  const labels = ["Wins", "Loses", "Kills", "RBIs"];

  const data = {
    labels,
    datasets: [
      {
        label: "BigDaddy420",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#333333",
      },
      {
        label: "Itali4NStali0nz",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#DB1A20",
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}
