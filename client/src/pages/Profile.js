import React, { useEffect, useState } from "react";
import GameCard from "../components/GameCard/index";
const cardMaxIndex = 9;

const Profile = () => {
    const [profileData, setProfileData] = useState({});
    const [achieveData, setAchieveData] = useState({});
    const [avatarData, setAvatarData] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setProfileData(user);

        const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
        setAchieveData(allAchievements);
    }, []);

    function checkImage(url) {
        var image = new Image();
        image.onload = function () {
            if (this.width > 0) {
                setAvatarData(profileData.avatar);
            }
        };
        image.onerror = function () {
            setAvatarData(require("../assets/placeholder.png").default);
        };
        image.src = url;
    }
    checkImage(profileData.avatar);

    if (achieveData.titles !== undefined && achieveData.titles.length > 0) {
        return (
            <div className="container">
                <div className="container-center c-primary">
                    <img className="img-avatar" src={avatarData} alt="this user's profile avatar" />
                    <h2>{profileData.gamertag}</h2>
                    <h4>Gamerscore: {profileData.gamerscore}</h4>
                </div>

                <div className="df fwrap">
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
