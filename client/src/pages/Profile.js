import React, { useEffect, useState } from "react";
import Card from "../components/Card/index";
const axios = require("axios");

const Profile = () => {
    const [account, getAccount] = useState("");

    useEffect(() => {
        fetchAccount();
    }, []);

    const fetchAccount = async () => {
        try {
            const fetch = await axios.get("/api/account");
            console.log("fetch data:", fetch.data);
            getAccount(fetch.data);
        } catch (err) {
            console.error(err);
        }
    };

    // if (account.length !== 0) {
    //     console.log(account["profileUsers"][0].settings[2].value);
    // }

    return (
        <div className="container">
            {account.length !== 0 ? <h2>Hello, {account["profileUsers"][0].settings[2].value}</h2> : <h2>Loading</h2>}
            <Card />
        </div>
    );
};

export default Profile;
