// src/pages/SignupPage.js

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import logosmall from "../images/dog_logo_beige_small.png";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUsername(e.target.value);
  const handleNumber = (e) => setNumber(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    const requestBody = { email, password, username, number };
    
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="Welcome">
      <form className="form" onSubmit={handleSignupSubmit}>
      <div className="input-container">

     

      <img className="logobig" src={logosmall} alt="logosmall" />
        <label>Username:</label>
        <input 
          className="input" 
          type="text" 
          name="username" 
          value={username} 
          onChange={handleUsername}
        />
      </div>
      <div className="input-container">
          <label>Email:</label>
          <input
            className="input" 
            type="email" 
            name="email" 
            value={email} 
            onChange={handleEmail} 
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            className="input" 
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
        </div>
        
      <div className="input-container">
        <label>Phone number:</label>
        <input 
          className="input" 
          type="text" 
          name="number" 
          value={number} 
          onChange={handleNumber} 
        />
      </div>

        <button type="submit" id="btn">
          Sign Up
          </button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="signup-label">
          Already have account?{" "}
        <Link className="link" to={"/login"}>Login</Link>
        </p>
      </form>

      
    </div>
  );
}

export default SignupPage;
