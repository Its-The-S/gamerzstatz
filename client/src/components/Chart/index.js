import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
const axios = require("axios");

// chart element
export default function Chart(props) {
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    // states
    const [profileData, setProfileData] = useState({});
    const [achieveData, setAchieveData] = useState({});
    const [friendAchieveData, setFriendAchieveData] = useState({});
    const [gameData, setGameData] = useState({});
    const [chosenFriendData, setChosenFriendData] = useState();

    // runs only on load useEffect
    useEffect(() => {
        // set user's profile data
        const user = JSON.parse(localStorage.getItem("user"));
        setProfileData(user);

        // sets the achievement data for the currently chosen game
        const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
        const currentTitle = allAchievements.titles.filter((title) => {
            return title.titleId === props.titleId;
        });
        setAchieveData(currentTitle[0].achievement);

        // sets which friend is currently selected from the dropdown
        const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
        setChosenFriendData(chosenFriend);

        // fetches chosen friends achievement data for the active game
        const fetchFriendAchievements = async () => {
            const friendList = JSON.parse(localStorage.getItem("friendsList"));
            // pull chosen friend out of friends list
            const friendId = friendList.filter((friend) => {
                return friend.gamertag === chosenFriend;
            });
            // use chosen friend's xbox live unique id to fetch their achievement data
            const fetchFriendAchieve = await axios.get(`/api/achieve/${friendId[0].xuid}`);
            // filter the fetched achievement data to only return the data for the active game
            const currentFriendTitle = fetchFriendAchieve.data.titles.filter((title) => {
                return title.titleId === props.titleId;
            });
            setFriendAchieveData(currentFriendTitle[0]?.achievement);
        };
        fetchFriendAchievements();

        // fetches user's achievement data for active game
        const fetchGame = async () => {
            const statFetch = await axios.get(`/api/game/${user.xuid}/${props.titleId}`);
            setGameData(statFetch);
            return statFetch;
        };
        fetchGame();
    }, []);

    // assigns loading when game title is not done being fetched
    let gameTitle = gameData.data?.achievements[0].titleAssociations[0].name || "Loading...";

    // column names
    const labels = ["Gamerscore"];

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
        text: [`${profileData.gamertag} vs ${chosenFriendData}`, `${gameTitle}`],
        color: "white",
        font: {
          weight: "normal",
          size: "20rem",
        },
      },
    },
  };

  const data = {
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
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "#DB1A20",
      },
    ],
  };

  // if (achieveData.titles !== undefined && achieveData.titles.length > 0) {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
  // }
  return <></>;

}
