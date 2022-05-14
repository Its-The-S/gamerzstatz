import React from "react";
import Image from "../assets/Minecraft_cover.png";

export default function Card() {
  //hard code for now
  const games = {
    title: "Minecraft",
    description: "Create your own world",
    id: 1,
  };

  const cardStyle = {
    width: "18rem",
    border: "solid grey 5px",
    padding: "15px",
  };

  //src is hardcoded for now, but will soon be populated with cover art
  //button will be used
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <h5 className="card-title">{games.title}</h5>
        <img className="card-img-top" src={Image} alt="Card cap" />
        <div className="card-body">
          <p className="card-text">{games.description}</p>
          <button href="#" className="btn btn-primary">
            Check my Stats
          </button>
        </div>
      </div>
    </div>
  );
}
