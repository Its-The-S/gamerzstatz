import React from "react";
import { Link } from "react-router-dom";
// import Image from "../../assets/Minecraft_cover.png";

export default function Card(props) {
    //hard code for now
    // const games = {
    //     title: "Minecraft",
    //     description: "Create your own world",
    //     id: 1,
    // };

    const cardStyle = {
        width: "18rem",
        border: "solid grey 5px",
        padding: "15px",
    };

    //button will be used
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
                    <Link to={`/compare/${props.titleId}`}>Check My Stats</Link>
                    {/* <button href="/compare" className="btn btn-primary">
                        Check my Stats
                    </button> */}
                </div>
            </div>
        </div>
    );
}
