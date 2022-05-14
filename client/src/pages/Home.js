import React from "react";
const axios = require("axios");
// const xbl = axios.create({
//     baseURL: "http://xbl.io/api/v2",
//     headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With" },
//     responseType: "json",
// });

const Home = () => {
    const account = axios.get("/api/account").then((res) => console.log(res));

    return <div className="container">HELLO WORLD</div>;
};

export default Home;
