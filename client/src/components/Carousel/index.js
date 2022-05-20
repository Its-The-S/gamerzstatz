import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
//hard code images
import Sims from "../../assets/sims.png";
import Cod from "../../assets/cod.jpg";
import Pvz from "../../assets/pvz.jpg";
import Minecraft from "../../assets/Minecraft_cover.png";

export const Carousel = () => {
  return (
    <div className="wrapper">
      <h2 id="basic-example-heading">Basic Example</h2>

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
          <img src={Sims} alt={"Characters doing whacky stuff."} />
        </SplideSlide>
        <SplideSlide>
          <img src={Pvz} alt={"Battle against plants and zombies."} />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Cod}
            alt={"Action-packed game with a lot of scary noises"}
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={Minecraft}
            alt={"Create your own world using buil.ding blocks"}
          />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Carousel;

