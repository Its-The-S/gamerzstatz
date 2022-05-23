import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard/index";
const cardMaxIndex = 9;

// profile page element
const Profile = () => {
    // states for profile, overall achivement, and avatar info
    const [profileData, setProfileData] = useState({});
    const [achieveData, setAchieveData] = useState({});
    const [avatarData, setAvatarData] = useState("");

    // only runs on load useEffect
    useEffect(() => {
        // get profile info from local storage
        const user = JSON.parse(localStorage.getItem("user"));
        setProfileData(user);

        // get overall achievement info from localstorage
        const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
        setAchieveData(allAchievements);
    }, []);

    // checks if the image fetched from xbox live returns data, if not,  set avatar to placeholder
    function checkImage(url) {
        var image = new Image();
        // if image loads properly, user image fetched from xbox live
        image.onload = function () {
            if (this.width > 0) {
                setAvatarData(profileData.avatar);
            }
        };
        // if image does not load properly, use placeholder image
        image.onerror = function () {
            setAvatarData(require("../assets/placeholder.png").default);
        };
        // initiates image.onload
        image.src = url;
    }
    checkImage(profileData.avatar);

    // only render when achievement data has finished populating
    if (achieveData.titles !== undefined && achieveData.titles.length > 0) {
        return (
            <div className="container">
                <div className="container-center c-primary">
                    {/* user avatar, checked for validity above */}
                    <img className="img-avatar" src={avatarData} alt="this user's profile avatar" />
                    <h2>{profileData.gamertag}</h2>
                    <h4>Gamerscore: {profileData.gamerscore}</h4>
                </div>

                {/* container for game cards */}
                <div className="df fwrap">
                    {/* make a card for each game title in the user's achievement library */}
                    {achieveData.titles.map((game, index) => {
                        if (index <= cardMaxIndex && game.achievement.progressPercentage > 0) {
                            return <GameCard key={index} titleId={game.titleId} coverArt={game.displayImage} currentAchievements={game.achievement.currentAchievements} currentGamerScore={game.achievement.currentGamerscore} percentAchieve={game.achievement.progressPercentage} title={game.name} totalGamerScore={game.achievement.totalGamerscore} />;
                        }
                    })}
                </div>
            </div>
        );
    }
    return <></>;
};

export default Profile;
