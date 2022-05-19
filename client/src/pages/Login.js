import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
const axios = require("axios");

function Login(props) {
    const [formState, setFormState] = useState({ email: "", password: "" });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            const token = mutationResponse.data.login.token;
            // await fetchUserAccount(mutationResponse.data.login.user.gamertag);

            const fetchAccount = await axios.get(`/api/account/${mutationResponse.data.login.user.gamertag}`);
            const newUser = {
                name: `${mutationResponse.data.login.user.firstName} ${mutationResponse.data.login.user.lastName}`,
                gamertag: mutationResponse.data.login.user.gamertag,
                email: mutationResponse.data.login.user.email,
                xuid: fetchAccount.data.profileUsers[0].id,
                avatar: fetchAccount.data.profileUsers[0].settings[0].value,
                gamerscore: fetchAccount.data.profileUsers[0].settings[1].value,
            };
            localStorage.setItem("user", JSON.stringify(newUser));

            const fetchAchieve = await axios.get(`/api/achieve/${newUser.xuid}`);
            localStorage.setItem("allAchievements", JSON.stringify(fetchAchieve.data));

            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
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
            <Link to="/signup">← Go to Signup</Link>
            <h2>Login</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="flex-row space-between my-2">
                    <label htmlFor="email">Email address:</label>
                    <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label htmlFor="pwd">Password:</label>
                    <input placeholder="******" name="password" type="password" id="pwd" onChange={handleChange} />
                </div>
                {error ? (
                    <div>
                        <p className="error-text">The provided credentials are incorrect</p>
                    </div>
                ) : null}
                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
