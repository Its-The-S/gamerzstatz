import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
const axios = require("axios");

// compare page element
export default function Compare() {
  // title is passed in url
  const { titleId } = useParams();
  // state for which friend is currently selected in the dropdown
  const [chosenFriendData, setChosenFriendData] = useState();
  // state for holding the logged in user's friends list
  const [sortedFriendData, setSortedFriendData] = useState(["Loading Gamertags..."]);

  // always listening useEffect
  useEffect(() => {
    // refreshes selected friend whenever a new choice is made in the dropdown
    localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
    const chosenFriend = JSON.parse(localStorage.getItem("chosenFriend"));
    setChosenFriendData(chosenFriend);
  });

  // only runs on load useEffect
  useEffect(() => {
    // grabs user from localstorage
    const user = JSON.parse(localStorage.getItem("user"));

    // fetches friends list from xbox live, sorts, and sets state
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

  // handles new choice from dropdown friends list, reloads the chart so new friends data is shown
  function handleChange() {
    localStorage.setItem("chosenFriend", JSON.stringify(document.querySelector("#friendSelect").value));
    window.location.reload(false);
  }

  return (
    <>
      <div>
        <span className="px-2">Compare to: </span>
        {/* drop down with friends list */}
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
      <div>
        <div className="chart-container">
          {/* display chart */}
          <Chart titleId={titleId} />
        </div>
      </div>
    </>
  );
}
