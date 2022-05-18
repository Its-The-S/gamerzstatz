import React, { useEffect, useState } from "react";
import Card from "../components/Card/index";
// import { useUser } from "../utils/UserContext";
// const axios = require("axios");

const Profile = () => {
    // const [account, getAccount] = useState("");
    // const { currentUser, fetchUserAccount } = useUser();
    // let profileData = {};

    // useEffect(() => {
    //     profileData = JSON.parse(localStorage.getItem("user"));
    // }, []);

    const [profileData, setProfileData] = useState({});

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setProfileData(user);
    }, []);

    // const fetchAccount = async () => {
    //     try {
    //         const fetch = await axios.get("/api/account");
    //         console.log("fetch data:", fetch.data);
    //         // getAccount(fetch.data);
    //         setCurrentUser(fetch.data);
    //         console.log(currentUser);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    // if (account.length !== 0) {
    //     console.log(account["profileUsers"][0].settings[2].value);
    // }

    return (
        <div className="container">
            {/* {currentUser.length !== 0 ? <h2>Hello, {currentUser["profileUsers"][0].settings[2].value}</h2> : <h2>Loading</h2>} */}
            {/* {profileData.length !== 0 ? <h2>Hello, {profileData.gamertag}</h2> : <h2>Loading</h2>} */}
            <h2>Hello, {profileData.gamertag}</h2>
            <Card />
        </div>
    );
};

export default Profile;
