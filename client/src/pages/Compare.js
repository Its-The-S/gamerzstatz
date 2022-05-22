import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
const axios = require("axios");

export default function Compare() {
    const { titleId } = useParams();
    const [chosenFriendData, setChosenFriendData] = useState();
    const [sortedFriendData, setSortedFriendData] = useState(["Loading Gamertags..."]);

    useEffect(() => {
        localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
        const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
        setChosenFriendData(chosenFriend);
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        const fetchFriends = async () => {
            const friends = await axios.get(`/api/friend/${user.xuid}`);
            localStorage.setItem("friendsList", JSON.stringify(friends.data.people));
            const friendTags = [];
            if (friends) {
                friends?.data?.people?.map((friend) => {
                    friendTags.push(friend.gamertag);
                });
                const sortedFriends = friendTags.sort();
                setSortedFriendData(sortedFriends);
            }
            return friends;
        };
        fetchFriends();
    }, []);

    function handleChange() {
        localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
        window.location.reload(false);
    }

    return (
        <>
            <div>
                <span>Compare to: </span>
                <select id="friendSelect" onChange={handleChange}>
                    {sortedFriendData &&
                        sortedFriendData.map((friend) => {
                            return (
                                <option key={friend} value={friend}>
                                    {friend}
                                </option>
                            );
                        })}
                </select>
            </div>
            <div className="chart-container">
                <Chart titleId={titleId} />
            </div>
        </>
    );
}
