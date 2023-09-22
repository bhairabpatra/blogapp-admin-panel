import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkIsLoggedIn = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(!isLoggedIn);
    } else {
      setIsLoggedIn(isLoggedIn);
    }
  };

  useEffect(() => {
    checkIsLoggedIn();
    return () => {};
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(isLoggedIn);
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };
  // myValue !== null ? setLogin(!isLogin) : setLogin(!isLogin)
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Blog's Admin
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/user"
                  activeclassname="active"
                  className="nav-link"
                >
                  USERS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="post" className="nav-link">
                  POSTS
                </NavLink>
              </li>
            </ul>
          </div>
          <div class="navbar-nav ms-auto">
            <li className="nav-item">
              {isLoggedIn ? (
                <NavLink
                  to="/"
                  activeclassname="active"
                  className="nav-link"
                  onClick={handleLogout}
                >
                  LOGOUT
                </NavLink>
              ) : (
                <NavLink to="sign-in" className="nav-link">
                  LOGIN
                </NavLink>
              )}
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
