import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
const axios = require("axios");

export default function Compare() {
    const { titleId } = useParams();
    const [chosenFriendData, setChosenFriendData] = useState();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
        const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
        setChosenFriendData(chosenFriend);

        const fetchFriends = async () => {
            const friends = await axios.get(`/api/friend/${user.xuid}`);
            // setFriendData(friends);
            localStorage.setItem("friendsList", JSON.stringify(friends.data.people));
            return friends;
        };
        fetchFriends();
    });

    const friendsArray = JSON.parse(localStorage.getItem("friendsList"));
    const friendTags = [];
    friendsArray.map((friend) => {
        friendTags.push(friend.gamertag);
    });
    const sortedFriends = friendTags.sort();

    function handleChange() {
        localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
        window.location.reload(false);
    }

    return (
        <>
            <div>
                <span>Compare to: </span>
                <select id="friendSelect" onChange={handleChange}>
                    {sortedFriends.map((friend) => {
                        return <option value={friend}>{friend}</option>;
                    })}
                </select>
                {/* <button type="submit" form="friendForm" id="friendFormSubmit" onSubmit={handleChange}>
                    Go!
                </button> */}
            </div>
            <div className="chart-container">
                <Chart titleId={titleId} />
            </div>
        </>
    );
}
