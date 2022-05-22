import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel";

// homepage element
const Home = () => {
    return (
        <div className="container">
            {/* carousel of our recommended games */}
            <Carousel />
        </div>
    );
};

export default Home;
