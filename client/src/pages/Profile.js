import React, { useEffect, useState } from "react";
import Card from "../components/Card/index";
const cardMaxIndex = 9;

const Profile = () => {
  const [profileData, setProfileData] = useState({});
  const [achieveData, setAchieveData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setProfileData(user);

    const allAchievements = JSON.parse(localStorage.getItem("allAchievements"));
    setAchieveData(allAchievements);
  }, []);

  if (achieveData.titles !== undefined && achieveData.titles.length > 0) {
    return (
      <div className="container">
        {/* {currentUser.length !== 0 ? <h2>Hello, {currentUser["profileUsers"][0].settings[2].value}</h2> : <h2>Loading</h2>} */}
        {/* {profileData.length !== 0 ? <h2>Hello, {profileData.gamertag}</h2> : <h2>Loading</h2>} */}
        <div>
          <img src={profileData.avatar} alt="profile avatar" />
          <h2>{profileData.gamertag}</h2>
          <h4>Gamerscore: {profileData.gamerscore}</h4>
        </div>
        {/* {achieveData.length !== undefined ? (
                <div>
                    {achieveData.titles.map((game) => {
                        <Card />;
                    })}
                </div>
            ) : (
                <h2>Loading...</h2>
            )} */}
        {/* <Card />; */}
        <div>
          {achieveData.titles.map((game, index) => {
            if (index <= cardMaxIndex) {
              return <Card />;
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    );
  }
  return <></>;
};

export default Profile;
