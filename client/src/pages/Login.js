import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
const axios = require("axios");

// login page element
function Login(props) {
    // state for form's input data
    const [formState, setFormState] = useState({ email: "", password: "" });
    // allows use of login mutation
    const [login, { error }] = useMutation(LOGIN);

    // handles submission of login form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            // attempt login mutation
            const mutationResponse = await login({
                variables: { email: formState.email, password: formState.password },
            });
            // assign token variable
            const token = mutationResponse.data.login.token;

            // fetch user's account data from xbox live using the gamertag associated with inputted email
            const fetchAccount = await axios.get(`/api/account/${mutationResponse.data.login.user.gamertag}`);
            // assign new user object to send to localstorage
            const newUser = {
                name: `${mutationResponse.data.login.user.firstName} ${mutationResponse.data.login.user.lastName}`,
                gamertag: mutationResponse.data.login.user.gamertag,
                email: mutationResponse.data.login.user.email,
                xuid: fetchAccount.data.profileUsers[0].id,
                avatar: fetchAccount.data.profileUsers[0].settings[0].value,
                gamerscore: fetchAccount.data.profileUsers[0].settings[1].value,
            };
            localStorage.setItem("user", JSON.stringify(newUser));

            // fetch user's overall achievement data from xbox live using the xbox unique id fetched from account above
            const fetchAchieve = await axios.get(`/api/achieve/${newUser.xuid}`);
            localStorage.setItem("allAchievements", JSON.stringify(fetchAchieve.data));

            Auth.login(token);
        } catch (e) {
            console.log(e);
        }
    };

    // updates the form state as user types
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container container-center my-1">
            {/* send to signup page */}
            <Link to="/signup">← Go to Signup</Link>
            <h2>Login</h2>
            {/* login form */}
            <form className="container" onSubmit={handleFormSubmit}>
                <div className="flex-row my-2">
                    <label className="ta-l ws-nw" htmlFor="email">
                        Email Address:
                    </label>
                    <input placeholder="youremail@test.com" name="email" type="email" id="email" onChange={handleChange} />
                </div>
                <div className="flex-row space-between my-2">
                    <label className="ta-l" htmlFor="pwd">
                        Password:
                    </label>
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
