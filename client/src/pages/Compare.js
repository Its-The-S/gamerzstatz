import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
const axios = require("axios");

export default function Compare() {
    const { titleId } = useParams();
    // const [friendData, setFriendData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

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

    return (
        <>
            <form id="friendForm">
                <span>Compare to: </span>
                <select id="friendSelect">
                    {sortedFriends.map((friend) => {
                        return <option value={friend}>{friend}</option>;
                    })}
                </select>
                <button type="submit" form="friendForm" id="friendFormSubmit">
                    Go!
                </button>
            </form>
            <div className="chart-container">
                <Chart titleId={titleId} />
            </div>
        </>
    );
}
