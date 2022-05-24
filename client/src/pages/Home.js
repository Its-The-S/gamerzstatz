import React, { useEffect, useState } from "react";
import img from '../assets/Screen Shot 2022-05-22 at 6.31.44 PM.png'
import Carousel from "../components/Carousel";





// homepage element
const Home = () => {
    return (

       <div>
         <p className="htext">
           Welcome to the Gamerzstatz website! Come check out your XBOX game stats and see how good you are
           compared to your friends. Make sure to use an existing gamer tag when signing up. Check out an exmaple
           user comparison below!
         </p>
         <img className="picture mqPh-dN" src={img}></img>
          <div className="container">
            {/* carousel of our recommended games */}
            <Carousel />
        </div>
       </div>
    );
};

export default Home;
