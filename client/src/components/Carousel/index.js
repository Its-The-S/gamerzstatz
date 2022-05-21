import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//hard code images
import dmc5 from "../../assets/dmc5se-square.jpeg";
import Sims from "../../assets/sims.png";
import Cod from "../../assets/cod.jpg";
import Pvz from "../../assets/pvz.jpg";
import Minecraft from "../../assets/Minecraft_cover.png";

export const Carousel = () => {
    return (
        <div className="wrapper">
            <h2 id="basic-example-heading">Heading to fill in with fancy prose</h2>

            <Splide
                options={{
                    perPage: 1,
                    height: "2 px",
                    rewind: true,
                    gap: "1rem",
                }}
                aria-labelledby="basic-example-heading"
                onMoved={(splide, newIndex) => {}}
            >
                <SplideSlide>
                    <h4>
                        Aidan's Pick: <span>Devil May Cry 5 Special Edition</span>
                    </h4>
                    <img src={dmc5} alt={"Cover art for Devil May Cry 5 Special Edition"} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2019/03/06/devil-may-cry-5-review" target="_blank">
                            IGN's Website
                        </a>
                    </p>
                    <p>
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/search?term=devil%20may%20cry%205" target="_blank">
                            Twitch's Website
                        </a>
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <img src={Pvz} alt={"Battle against plants and zombies."} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Cod} alt={"Action-packed game with a lot of scary noises"} />
                </SplideSlide>
                <SplideSlide>
                    <img src={Minecraft} alt={"Create your own world using buil.ding blocks"} />
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Carousel;
