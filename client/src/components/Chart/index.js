import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
const axios = require("axios");
let gameTitle = "Loading...";

export default function newChart(props) {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

  const [profileData, setProfileData] = useState({});
  const [achieveData, setAchieveData] = useState({});
  const [friendAchieveData, setFriendAchieveData] = useState({});
  const [gameData, setGameData] = useState({});
  const [chosenFriendData, setChosenFriendData] = useState();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setProfileData(user);

    const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
    const currentTitle = allAchievements.titles.filter((title) => {
      return title.titleId === props.titleId;
    });
    gameTitle = currentTitle[0].name;
    setAchieveData(currentTitle[0].achievement);

    const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
    setChosenFriendData(chosenFriend);

    const fetchFriendAchievements = async () => {
      const friendList = JSON.parse(localStorage.getItem("friendsList"));
      const friendId = friendList.filter((friend) => {
        return friend.gamertag === chosenFriend;
      });
      const fetchFriendAchieve = await axios.get(`/api/achieve/${friendId[0].xuid}`);
      const currentFriendTitle = fetchFriendAchieve.data.titles.filter((title) => {
        return title.titleId === props.titleId;
      });
      setFriendAchieveData(currentFriendTitle[0]?.achievement);
    };
    fetchFriendAchievements();

    const fetchGame = async () => {
      const statFetch = await axios.get(`/api/game/${user.xuid}/${props.titleId}`);
      setGameData(statFetch);
      return statFetch;
    };
    fetchGame();
  }, []);

  const data = {
    labels: [profileData.gamertag, chosenFriendData],
    datasets: [
      {
        label: "Game Progress",
        data: [achieveData?.currentGamerscore, friendAchieveData?.progressPercentage],
        borderColor: "#333333",
        backgroundColor: ["#aab1ae", "#DB1A20"],
        pointBackgroundColor: "#333333",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Game Progress",
        color: "white",
        font: {
          family: "Shadows Into Light",
          weight: "normal",
          size: "35rem",
        },

        padding: {
          top: 30,
          bottom: 10,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  const data2 = {
    labels: [profileData.gamertag, chosenFriendData],
    datasets: [
      {
        label: "Game Achievements",
        data: [achieveData?.currentAchievements, friendAchieveData?.currentAchievements],
        borderColor: "#333333",
        backgroundColor: ["#aab1ae", "#DB1A20"],
        pointBackgroundColor: "#333333",
      },
    ],
  };

  const options2 = {
    plugins: {
      title: {
        display: true,
        text: "Game Achievements",
        color: "white",
        font: {
          family: "Shadows Into Light",
          weight: "normal",
          size: "35rem",
        },

        padding: {
          top: 30,
          bottom: 10,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  const labels = ["Gamerscore"];

  const options3 = {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: "white",
          lineWidth: 0.5,
        },
        ticks: {
          display: false,
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
      },
      title: {
        display: true,
        text: "Gamerscore",
        color: "white",
        font: {
          family: "Shadows Into Light",
          weight: "normal",
          size: "35rem",
        },
        padding: {
          top: 30,
        },
      },
    },
  };

  const data3 = {
    labels,
    datasets: [
      {
        label: profileData.gamertag,
        data: [achieveData?.currentGamerscore],
        backgroundColor: "#aab1ae",
      },
      {
        label: chosenFriendData,
        data: [friendAchieveData?.currentGamerscore],
        backgroundColor: "#DB1A20",
      },
    ],
  };

  return (
    <>
      <h2>{gameTitle}</h2>
      <div className="flex-row">
        <div className="card-donut">
          <Doughnut options={options} data={data} />
        </div>
        <div className="card-donut">
          <Doughnut options={options2} data={data2} />
        </div>
      </div>
      <div className="chart-container">
        <Bar options={options3} data={data3} />
      </div>
    </>
  );
}
