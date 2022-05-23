import React from "react";
import { Link } from "react-router-dom";

// game card element
export default function GameCard(props) {

    const cardStyle = {
        width: "18rem",
        border: "solid grey 0.33rem",
        padding: "1.25rem",
    };

    return (
        <div className="container">
            <div className="card card-margin" style={cardStyle}>
                <h5 className="card-title">{props.title}</h5>
                <img className="card-img-top" src={props.coverArt} alt="Card cap" />
                <div className="card-body">
                    <p>Completed Achievements: {props.currentAchievements}</p>
                    <p>
                        Gamerscore: {props.currentGamerScore} / {props.totalGamerScore}
                    </p>
                    <p>Percent Complete: {props.percentAchieve}%</p>
                    {/* link to compare page */}
                    <Link to={`/compare/${props.titleId}`}>Check My Stats</Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
