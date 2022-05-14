import React from "react";
import Card from "../components/Card";
const axios = require("axios");
// const xbl = axios.create({
//   baseURL: "http://xbl.io/api/v2",
//   headers: { "X-Authorization": "wsscs0cswwgkg4s4ko40804o40s0444kckc", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With" },
//   responseType: "json",
// });

const Home = () => {
  const fetchAccount = async () => {
    const account = await axios.get("/api/account");
    console.log("Account info:", account);
  };

  return (
    <div className="container" onLoad={fetchAccount}>
      <Card />
      HELLO WORLD
    </div>
  );
  main;
};

export default Home;
