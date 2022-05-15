import React, { useState, useContext } from "react";

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "John",
        gamertag: "Admin",
        xuid: 142323,
        email: "",
        password: "",
    });
    const updateUser = (newName) => {
        setCurrentUser({ ...currentUser, name: newName });
    };
    return <UserContext.Provider value={{ currentUser: currentUser, updateUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;
