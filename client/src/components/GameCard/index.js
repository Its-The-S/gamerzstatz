import React from "react";
import { Link } from "react-router-dom";

export default function GameCard(props) {
  const cardStyle = {
    width: "18rem",
    border: "solid grey 5px",
    padding: "20px",
    margin: "30px",
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <h5 className="card-title">{props.title}</h5>
        <img className="card-img-top" src={props.coverArt} alt="Card cap" />
        <div className="card-body">
          <p>Completed Achievements: {props.currentAchievements}</p>
          <p>
            Gamerscore: {props.currentGamerScore} / {props.totalGamerScore}
          </p>
          <p>Percent Complete: {props.percentAchieve}%</p>
          <Link to={`/compare/${props.titleId}`}>Compare My Stats</Link>
        </div>
      </div>
    </div>
  );
}
