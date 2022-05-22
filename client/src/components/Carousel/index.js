import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//hard code images
import dmc5 from "../../assets/dmc5.png";
import Cod from "../../assets/cod.jpg";
import Pvz from "../../assets/pvz.jpg";
import Minecraft from "../../assets/Minecraft_cover.png";
import Batman from "../../assets/Batman_Arkham_Knight_Cover_Art.jpg";

export const Carousel = () => {
    const imageStyle = {
        width: "18rem",
        border: "solid grey 5px",
        padding: "15px",
        resizeMode: "contain",
    };

    const alignStyle = {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div className="wrapper" style={alignStyle}>
            <h2 id="basic-example-heading">Popular Games</h2>

            <Splide
                options={{
                    perPage: 1,
                    //   height: "2 px",
                    rewind: true,
                    //   gap: "1rem",
                }}
                aria-labelledby="basic-example-heading"
                onMoved={(splide, newIndex) => {}}
            >
                <SplideSlide>
                    <h4>
                        Aidan's Pick: <span>Devil May Cry 5 Special Edition</span>
                    </h4>
                    <img src={dmc5} alt={"Cover art for Devil May Cry 5 Special Edition"} style={imageStyle} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2019/03/06/devil-may-cry-5-review" target="_blank">
                            IGN
                        </a>
                    </p>
                    <p className="carousel-link">
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/search?term=devil%20may%20cry%205" target="_blank">
                            Twitch
                        </a>
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <h4>
                        Thomas' Pick: <span>Call of Duty: Black Ops 4</span>
                    </h4>
                    <img src={Cod} alt={"Cover art for Call of Duty: Black Ops 4"} style={imageStyle} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2018/10/20/call-of-duty-black-ops-4-review" target="_blank">
                            IGN
                        </a>
                    </p>
                    <p className="carousel-link">
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/directory/game/Call%20of%20Duty%3A%20Black%20Ops%204" target="_blank">
                            Twitch
                        </a>
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <h4>
                        Brett's Pick: <span>Plants vs. Zombies</span>
                    </h4>
                    <img src={Pvz} alt={"Cover art for Plants vs. Zombies"} style={imageStyle} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2009/05/05/plants-vs-zombies-review-4" target="_blank">
                            IGN
                        </a>
                    </p>
                    <p className="carousel-link">
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/directory/game/Plants%20vs.%20Zombies" target="_blank">
                            Twitch
                        </a>
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <h4>
                        Maya's Pick: <span>Minecraft</span>
                    </h4>
                    <img src={Minecraft} alt={"Cover art for Minecraft"} style={imageStyle} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2011/11/24/minecraft-review" target="_blank">
                            IGN
                        </a>
                    </p>
                    <p className="carousel-link">
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/directory/game/Minecraft" target="_blank">
                            Twitch
                        </a>
                    </p>
                </SplideSlide>
                <SplideSlide>
                    <h4>
                        Joe's Pick: <span>Batman Arkham Knight</span>
                    </h4>
                    <img src={Batman} alt={"Cover art for Minecraft"} style={imageStyle} />
                    <p>
                        Read the review on{" "}
                        <a href="https://www.ign.com/articles/2015/06/19/batman-arkham-knight-review" target="_blank">
                            IGN
                        </a>
                    </p>
                    <p className="carousel-link">
                        See who is streaming it on{" "}
                        <a href="https://www.twitch.tv/directory/game/Batman:%20Arkham%20Knight" target="_blank">
                            Twitch
                        </a>
                    </p>
                </SplideSlide>
            </Splide>
        </div>
    );
};

export default Carousel;
