import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";
//hard code images
import Sims from "../../assets/sims.png";
import Cod from "../../assets/cod.jpg";
import Pvz from "../../assets/pvz.jpg";
import Minecraft from "../../assets/Minecraft_cover.png";

export default function Carousel() {
    return (
        <Splide aria-label="My Favorite Images">
            <SplideSlide>
                <img src={Cod} alt="Call of Duty" />
            </SplideSlide>
            <SplideSlide>
                <img src={Sims} alt="Sims" />
            </SplideSlide>
            <SplideSlide>
                <img src={Pvz} alt="Plants vs Zombies" />
            </SplideSlide>
            <SplideSlide>
                <img src={Minecraft} alt="Minecraft" />
            </SplideSlide>
        </Splide>
    );
}
