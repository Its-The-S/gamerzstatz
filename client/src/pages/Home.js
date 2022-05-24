import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

// homepage element
const Home = () => {
    return (
        <div>
            <p className="htext">Welcome to the Gamerz Statz website! Come check out your Xbox game achievement stats and see how good you are compared to your friends. Make sure to use an existing gamer tag when signing up!</p>
            <div className="container">
                {/* carousel of our recommended games */}
                <Carousel />
            </div>
        </div>
    );
};

export default Home;
