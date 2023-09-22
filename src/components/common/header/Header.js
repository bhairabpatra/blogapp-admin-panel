import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

  const [isLogin, setLogin] = useState(false);
  let myValue = localStorage.getItem("token");
  const verifyLogin = () => {
     if(myValue !== null){
      setLogin(!isLogin)
     }else{
      setLogin(isLogin)
     }

  }
  useEffect(()=>{
    verifyLogin()
  },[])
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
                <NavLink to="/" activeclassname="active" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/user" activeclassname="active" className="nav-link">
                  USERS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="post" className="nav-link">
                  POSTS
                </NavLink>
              </li>
              <li className="nav-item">
               {isLogin ?  <div><NavLink className="nav-link">
                  Hi, Welcome
                </NavLink></div> : <NavLink to="sign-in" className="nav-link">
                  LOGIN
                </NavLink>} 
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
