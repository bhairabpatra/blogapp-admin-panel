import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UserForm() {
  let navigate = useNavigate();
  const apiUrl = "http://localhost:8080/api/v1/signUp"; // api end point  - 1
  const [message, setMessage] = useState("");
  const [signUpform, setSignupForm] = useState({ // state set - 2
    name: "",
    email: "",
    phone: "",
    password: "",
    conPassword: "",
  });

  const handleInputChange = (event) => {
    event.preventDefault();
    setSignupForm({ ...signUpform, [event.target.name]: event.target.value });
  };

  const handelLogin = (e) => {
    e.preventDefault();
    axios
      .post(apiUrl, signUpform)
      .then((response) => {
        setMessage(response.data.message);
        console.log("form submut successfully");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error:", error.response.data.email);
      });
  };

  return (
    <div className="container">
      <div className="signup card">
        <div className="ignup-heading text-center">
          <h2>SIGN UP</h2>
          <p className="">{message}</p>
        </div>

        <form className="">
          <div className="mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={signUpform.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              value={signUpform.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              name="phone"
              value={signUpform.phone}
              onChange={handleInputChange}
              placeholder="Phone number"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="password"
              value={signUpform.password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              name="conPassword"
              value={signUpform.conPassword}
              onChange={handleInputChange}
              placeholder="Conform password"
            />
          </div>
          <div className="mb-4 mt-5 text-center">
            <button
              type="submit"
              onClick={handelLogin}
              className="btn btn-lg btn-primary w-100"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserForm;
