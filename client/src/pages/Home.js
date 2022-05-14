import React, { useEffect, useState } from "react";
import Card from "../components/Card";
const axios = require("axios");

const Home = () => {
    const [account, getAccount] = useState("");

    useEffect(() => {
        fetchAccount();
    }, []);

    const fetchAccount = () => {
        axios.get("/api/account").then((res) => {
            const accountInfo = res.data.profileUsers;
            console.log("fetch data:", res.data.profileUsers);
            getAccount(accountInfo);
        });
    };
    console.log("state:", account);

    return {
      <div className="container">
      <Card />
      </div>
    };
};

export default Home;
