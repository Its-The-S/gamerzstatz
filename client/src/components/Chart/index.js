import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
const axios = require("axios");
// import { useUser } from "../../utils/UserContext";

export default function Chart(props) {
    // const { currentUser } = useUser();
    ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

    const [profileData, setProfileData] = useState({});
    const [achieveData, setAchieveData] = useState({});
    const [gameData, setGameData] = useState({});
    const [chosenFriendData, setChosenFriendData] = useState();
    // const [friendData, setFriendData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setProfileData(user);

        const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
        setAchieveData(allAchievements);

        const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
        setChosenFriendData(chosenFriend);

        const fetchGame = async () => {
            const statFetch = await axios.get(`/api/game/${user.xuid}/${props.titleId}`);
            setGameData(statFetch);
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

    let gameTitle = gameData.data?.achievements[0].titleAssociations[0].name || "Loading...";

    const labels = ["Wins", "Loses", "Kills", "RBIs"];

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
                data: [10, 24, 9, 37],
                backgroundColor: "#aab1ae",
            },
            {
                label: chosenFriendData,
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
