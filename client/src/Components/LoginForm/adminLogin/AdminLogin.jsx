import "./adminlogin.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8070/loginAdmin", { username, password })
      .then((result) => {
        console.log(result)
        if(result.data === "Login Successfully"){
          navigate('/mainpanel')
        }
      })
      .catch((err) => console.log(err));

    // Perform validation checks here
    if (username === "") {
      setErrorMessage("Please enter a username");
      return;
    }

    if (password === "") {
      setErrorMessage("Please enter a password");
      return;
    }

    // Clear any existing error messages
    setErrorMessage(" ");

    // Handle the login logic here (e.g., send the username and password to an API)
    // ...
  };

  return (
    <>
      <div>
        <div className="container">
          <p className="text">We Help Students Grow Their Careers.</p>
        </div>

        <div className="login-form">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <h2 className="loginHeader">Admin Login</h2>
              {/* <label htmlFor="username">Username:</label> */}
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>

            <div className="form-group">
              {/* <label htmlFor="password">Password:</label> */}
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            {/* <div className="forgotPassword">
              <a href="/forgot-password">Forgot password?</a>
            </div> */}

            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}

            <button type="submit">Login</button>
          </form>

          <div className="vertical-line"></div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;