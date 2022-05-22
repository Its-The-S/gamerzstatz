import React, { useState, useContext } from "react";

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

// global state initial
const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "InitialName",
        gamertag: "InitialTag",
        xuid: "12345",
        email: "",
        password: "",
    });

    // global state provider
    return <UserContext.Provider value={{ currentUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
