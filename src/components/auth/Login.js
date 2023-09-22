import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const loginApi = "http://localhost:8080/api/v1/signIn";
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handelInput = (event) => {
    event.preventDefault();
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handelLogin = () => {
    axios
      .post(loginApi, login)
      .then((res) => {
        setMessage(res.data.message);
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="login-form">
        <div className="heading">
          <h3>Login</h3>
          <p>{message}</p>
        </div>
        <>
          <div class="mb-3 mt-3">
            <label for="email" class="form-label">
              Email:
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={login.email}
              onChange={handelInput}
            />
          </div>
          <div class="mb-3">
            <label for="pwd" class="form-label">
              Password:
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter password"
              name="password"
              value={login.password}
              onChange={handelInput}
            />
          </div>
          <button
            type="submit"
            onClick={handelLogin}
            class="btn btn-primary w-100 mt-3"
          >
            Submit
          </button>
        </>
        <div className="col-md-12 mt-3">
          <div className="row">
            <div className="col-md-6">
              <Link to="/sign-up">Sign up</Link>
              <br />
              <Link to="/forgot-password">Forgot password</Link>
            </div>
            <div className="col-md-6 text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
