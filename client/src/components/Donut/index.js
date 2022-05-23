import { ArcElement } from "chart.js";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
const axios = require("axios");
// import { useUser } from "../../utils/UserContext";

export default function newChart(props) {
  // const { currentUser } = useUser();
  ChartJS.register(CategoryScale, Title, Tooltip, Legend, ArcElement);

  const [profileData, setProfileData] = useState({});
  const [achieveData, setAchieveData] = useState({});
  const [friendAchieveData, setFriendAchieveData] = useState({});
  const [gameData, setGameData] = useState({});
  const [chosenFriendData, setChosenFriendData] = useState();
  // const [friendData, setFriendData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setProfileData(user);

    const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
    const currentTitle = allAchievements.titles.filter((title) => {
      return title.titleId === props.titleId;
    });
    console.log(currentTitle);
    setAchieveData(currentTitle[0].achievement);

    const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
    setChosenFriendData(chosenFriend);

    const fetchFriendAchievements = async () => {
      const friendList = JSON.parse(localStorage.getItem("friendsList"));
      const friendId = friendList.filter((friend) => {
        return friend.gamertag === chosenFriend;
      });
      console.log("fList", friendId[0].xuid);
      const fetchFriendAchieve = await axios.get(`/api/achieve/${friendId[0].xuid}`);
      console.log("fetch", fetchFriendAchieve);
      const currentFriendTitle = fetchFriendAchieve.data.titles.filter((title) => {
        return title.titleId === props.titleId;
      });
      console.log("friend", currentFriendTitle);
      setFriendAchieveData(currentFriendTitle[0]?.achievement);
    };
    fetchFriendAchievements();

    const fetchGame = async () => {
      const statFetch = await axios.get(`/api/game/${user.xuid}/${props.titleId}`);
      setGameData(statFetch);
      console.log(statFetch);
      return statFetch;
    };
    fetchGame();

    // const fetchFriends = async () => {
    //     const friends = await axios.get(`/api/friend/${user.xuid}`);
    //     console.log("friends", friends);
    //     setFriendData(friends);
    //     return friends;
    // };
    // fetchFriends();

    // const friends = JSON.parse(localStorage.getItem("friendsList"));
    // setFriendData(friends);
  }, []);

  //   let gameTitle = gameData.data?.achievements[0].titleAssociations[0].name || "Loading...";

  //   const labels = ["Achievements", "Progress", "Gamerscore"];

  //   const options = {
  //     maintainAspectRatio: false,
  //     scales: {
  //       x: {
  //         grid: {
  //           color: "white",
  //           lineWidth: 0.5,
  //         },
  //         ticks: {
  //           color: "white",
  //           font: {
  //             weight: "normal",
  //             size: "15rem",
  //           },
  //         },
  //       },
  //       y: {
  //         grid: {
  //           color: "white",
  //           lineWidth: 0.5,
  //         },
  //         ticks: {
  //           color: "white",
  //           font: {
  //             weight: "normal",
  //             size: "15rem",
  //           },
  //         },
  //       },
  //     },
  //     layout: {
  //       padding: {
  //         right: 15,
  //         left: 15,
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         position: "top",
  //         labels: {
  //           color: "white",
  //           font: {
  //             weight: "normal",
  //             size: "15rem",
  //           },
  //         },
  //       },
  //       title: {
  //         display: true,
  //         text: [`${profileData.gamertag} vs ${chosenFriendData}`, `${gameTitle}`],
  //         color: "white",
  //         font: {
  //           weight: "normal",
  //           size: "20rem",
  //         },
  //       },
  //     },
  //   };

  //   const data = {
  //     labels,
  //     datasets: [
  //       {
  //         label: profileData.gamertag,
  //         data: [achieveData?.currentAchievements, achieveData?.progressPercentage, achieveData?.currentGamerscore],
  //         backgroundColor: "#aab1ae",
  //       },
  //       {
  //         label: chosenFriendData,
  //         data: [friendAchieveData?.currentAchievements, friendAchieveData?.progressPercentage, friendAchieveData?.currentGamerscore],
  //         // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
  //         backgroundColor: "#DB1A20",
  //       },
  //     ],
  //   };

  const data = {
    labels: [profileData.gamertag, chosenFriendData],
    datasets: [
      {
        label: "Game Progress",
        data: [achieveData?.currentGamerscore, friendAchieveData?.progressPercentage],
        borderColor: "gray",
        backgroundColor: ["#aab1ae", "#DB1A20"],
        pointBackgroundColor: "gray",
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
          weight: "normal",
          size: "20rem",
        },

        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  const data2 = {
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
    labels: [profileData.gamertag, chosenFriendData],
    datasets: [
      {
        label: "Game Achievements",
        data: [achieveData?.currentAchievements, friendAchieveData?.currentAchievements],
        borderColor: "gray",
        backgroundColor: ["#aab1ae", "#DB1A20"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
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
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        // responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  return (
    <>
      <div className="flex-row">
        <div className="card-donut">
          <Doughnut options={options} data={data} />
        </div>
        <div className="card-donut">
          <Doughnut options={options2} data={data2} />
        </div>
      </div>
    </>
  );
  return <></>;
}
