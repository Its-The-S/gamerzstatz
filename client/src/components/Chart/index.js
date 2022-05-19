import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
// import { useUser } from "../../utils/UserContext";

export default function Chart() {
  // const { currentUser } = useUser();
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const [profileData, setProfileData] = useState({});
  const [achieveData, setAchieveData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setProfileData(user);

    const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
    setAchieveData(allAchievements);
  }, []);

  const options = {
    maintainAspectRatio: false,
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
            size: "15rem",
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
            size: "15rem",
          },
        },
      },
    },
    layout: {
      padding: {
        right: 15,
        left: 15,
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "white",
          font: {
            weight: "normal",
            size: "15rem",
          },
        },
      },
      title: {
        display: true,
        text: [`${profileData.gamertag} vs Itali4NStali0nz`, `MLB The Show: Call of Duty Edition`],
        color: "white",
        font: {
          weight: "normal",
          size: "20rem",
        },
      },
    },
  };
  const labels = ["Wins", "Loses", "Kills", "RBIs"];

  const data = {
    labels,
    datasets: [
      {
        label: profileData.gamertag,
        data: [10, 24, 9, 37],
        backgroundColor: "#aab1ae",
      },
      {
        label: "Itali4NStali0nz",
        data: [5, 43, 19, 87],
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#DB1A20",
      },
    ],
  };
  if (achieveData.titles !== undefined && achieveData.titles.length > 0) {
    return (
      <>
        <Bar options={options} data={data} />
      </>
    );
  }
  return <></>;
}
