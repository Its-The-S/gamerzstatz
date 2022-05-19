import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
const axios = require("axios");

function Signup(props) {
    const [formState, setFormState] = useState({ email: "", password: "", firstName: "", lastName: "", gamertag: "" });
    const [addUser] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await addUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName,
                gamertag: formState.gamertag,
            },
        });
        const token = mutationResponse.data.addUser.token;
        const fetchAccount = await axios.get(`/api/account/${mutationResponse.data.addUser.user.gamertag}`);
        const newUser = {
            name: `${mutationResponse.data.addUser.user.firstName} ${mutationResponse.data.addUser.user.lastName}`,
            gamertag: mutationResponse.data.addUser.user.gamertag,
            email: mutationResponse.data.addUser.user.email,
            xuid: fetchAccount.data.profileUsers[0].id,
            avatar: fetchAccount.data.profileUsers[0].settings[0].value,
            gamerscore: fetchAccount.data.profileUsers[0].settings[1].value,
        };
        localStorage.setItem("user", JSON.stringify(newUser));

        const fetchAchieve = await axios.get(`/api/achieve/${newUser.xuid}`);
        console.log(fetchAchieve.data);
        localStorage.setItem("allAchievements", JSON.stringify(fetchAchieve.data));

        console.log(mutationResponse);
        Auth.login(token);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container my-1">
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="firstName">First Name:</label>
                    <input placeholder="First" name="firstName" type="firstName" id="firstName" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="lastName">Last Name:</label>
                    <input placeholder="Last" name="lastName" type="lastName" id="lastName" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="gamertag">Gamertag:</label>
                    <input placeholder="tag" name="gamertag" type="gamertag" id="gamertag" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                </div>
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
