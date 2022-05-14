import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import { useUser } from "../../utils/UserContext";

// displays nav bar
function Nav() {
  const { currentUser, updateUser } = useUser();
  React.useEffect(() => {
    updateUser();
  }, []);

  function showNavigation() {
    // displayed if user is logged in
    if (Auth.loggedIn()) {
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
          <label className="menu-button-container" for="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link to="/orderHistory">Order History</Link>
            </li>
            <li>
              {/* this is not using the Link component to logout or user and then refresh the application to the start */}
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
          <label className="menu-button-container" for="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link to="/signup">Signup</Link>
            </li>
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
