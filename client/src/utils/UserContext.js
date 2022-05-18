import React, { useState, useContext } from "react";
const axios = require("axios");

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "InitialName",
        gamertag: "InitialTag",
        xuid: "12345",
        email: "",
        password: "",
    });

    // const updateUser = (newName) => {
    //     setCurrentUser({ ...currentUser, name: newName });
    // };

    // const getUser = () => {
    //     return localStorage.getItem("user");
    // };

    const fetchUserAccount = async (gtag) => {
        try {
            const fetch = await axios.get(`/api/account/${gtag}`);
            console.log(fetch);
            console.log("made it into the context fetch");

            // FILL THIS OUT WITH THE REST OF THE DATA
            const newUser = {
                name: "InitialName",
                gamertag: gtag,
                xuid: "12345",
                email: "",
                password: "",
            };
            localStorage.setItem("user", JSON.stringify(newUser));
            console.log(currentUser);
        } catch (err) {
            console.error(err);
        }
    };

    return <UserContext.Provider value={{ currentUser, fetchUserAccount }}>{children}</UserContext.Provider>;
};

export default UserProvider;
