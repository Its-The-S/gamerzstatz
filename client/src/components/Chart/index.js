import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useUser } from "../../utils/UserContext";

export default function Chart() {
  const { currentUser } = useUser();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const options = {
    scales: {
      x: {
        grid: {
          color: "white",
          lineWidth: 0.5,
        },
        ticks: {
          color: "white",
          font: {
            weight: "normal",
          },
        },
      },
      y: {
        grid: {
          color: "white",
          lineWidth: 0.5,
        },
        ticks: {
          color: "white",
          font: {
            weight: "normal",
          },
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            weight: "normal",
          },
        },
      },
      title: {
        display: true,
        text: `${currentUser.gamertag} vs Itali4NStali0nz: MLB The Show: Call of Duty Edition`,
        color: "white",
        font: {
          weight: "normal",
        },
      },
    },
  };
  const labels = ["Wins", "Loses", "Kills", "RBIs"];

  const data = {
    labels,
    datasets: [
      {
        label: currentUser.gamertag,
        data: [10, 24, 9, 37],
        backgroundColor: "#AAB1AE",
      },
      {
        label: "Itali4NStali0nz",
        data: [5, 43, 19, 87],
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
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
