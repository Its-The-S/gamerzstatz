import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// navbar element
function Nav() {
    function showNavigation() {
        // displayed if user is logged in
        if (Auth.loggedIn()) {
            return (
                <section className="top-nav">
                    <h1>
                        {/* link to homepage */}
                        <Link to="/">
                            <span role="img" aria-label="controller ">
                                🎮
                            </span>
                            Gamerz Statz
                        </Link>
                    </h1>
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-button-container" htmlFor="menu-toggle">
                        <div className="menu-button"></div>
                    </label>
                    <ul className="menu">
                        {/* link to profile page */}
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        {/* link to log the user out */}
                        <li>
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </li>
                    </ul>
                </section>
            );
        } else {
            // displayed if user is not logged in
            return (
                <section className="top-nav">
                    <h1>
                        <Link to="/">
                            <span role="img" aria-label="controller ">
                                🎮
                            </span>
                            Gamerz Statz
                        </Link>
                    </h1>
                    <input id="menu-toggle" type="checkbox" />
                    <label className="menu-button-container" htmlFor="menu-toggle">
                        <div className="menu-button"></div>
                    </label>
                    <ul className="menu">
                        {/* link to signup page */}
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        {/* link to login page */}
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </section>
            );
        }
    }

    return (
        // logo section with name
        <header>
            <nav>{showNavigation()}</nav>
        </header>
    );
}

export default Nav;
