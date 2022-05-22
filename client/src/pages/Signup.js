import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
const axios = require("axios");

// signup page element
function Signup(props) {
    // state for holding form info
    const [formState, setFormState] = useState({ email: "", password: "", firstName: "", lastName: "", gamertag: "" });
    // allows use of mutation to add new user
    const [addUser] = useMutation(ADD_USER);

    // handles submission of signup form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // run mutation
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
        // fetch account data from xbox live using the submitted gamertag
        const fetchAccount = await axios.get(`/api/account/${mutationResponse.data.addUser.user.gamertag}`);
        // create object for new user
        const newUser = {
            name: `${mutationResponse.data.addUser.user.firstName} ${mutationResponse.data.addUser.user.lastName}`,
            gamertag: mutationResponse.data.addUser.user.gamertag,
            email: mutationResponse.data.addUser.user.email,
            xuid: fetchAccount.data.profileUsers[0].id,
            avatar: fetchAccount.data.profileUsers[0].settings[0].value,
            gamerscore: fetchAccount.data.profileUsers[0].settings[1].value,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        // fetch overall achievement data from xbox live using the xbox live unique id fetched above
        const fetchAchieve = await axios.get(`/api/achieve/${newUser.xuid}`);
        localStorage.setItem("allAchievements", JSON.stringify(fetchAchieve.data));

        console.log(mutationResponse);
        Auth.login(token);
    };

    // updates form state as user types
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container container-center my-1">
            <Link to="/login">← Go to Login</Link>

            <h2>Signup</h2>
            <form className="container" onSubmit={handleFormSubmit}>
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
                <p className="d-b">
                    Please Note: Gamertag must be an existing Xbox live gamertag. To sign up for Xbox Live, visit <a href="https://www.xbox.com/en-US/live">Xbox Live</a>
                </p>

                <div className="flex-row flex-end">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
