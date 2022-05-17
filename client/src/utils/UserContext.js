import React, { useState, useContext } from "react";

export const UserContext = React.createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({
        name: "InitialName",
        gamertag: "InitialTag",
        xuid: 12345,
        email: "",
        password: "",
    });

    // const updateUser = (newName) => {
    //     setCurrentUser({ ...currentUser, name: newName });
    // };

    const fetchUserAccount = async (gtag) => {
        try {
            const fetch = await axios.get(`/api/account/${gtag}`);
            console.log(fetch);
            // FILL THIS OUT WITH THE REST OF THE DATA
            setCurrentUser({ ...currentUser, gamertag: gtag });
            // console.log(currentUser);
        } catch (err) {
            console.error(err);
        }
    };

    return <UserContext.Provider value={{ currentUser, fetchUserAccount }}>{children}</UserContext.Provider>;
};

export default UserProvider;
