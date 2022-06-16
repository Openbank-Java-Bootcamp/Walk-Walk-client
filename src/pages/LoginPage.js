// src/pages/LoginPage.js

import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logosmall from "../images/dog_logo_beige_small.png";

const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/"); // <== ADD
      })
      .catch((error) => {
        const errorDescription = error.response.data.errors[0].defaultMessage;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="Welcome">
      <form className="form" onSubmit={handleLoginSubmit}>
        <div className="input-container-login">
        <img className="logobig" src={logosmall} alt="logosmall" />
          <label>Email:</label>
          <input 
          type="email" 
          name="email" 
          className="input" 
          value={email} 
          onChange={handleEmail} 
          />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={handlePassword}
          />
        </div>
          <button type="submit" id="btn0">
            Login
          </button>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <p className="signup-label">
          Don't have an account?{" "}
          <Link className="link" to={"/signup"}>Sign Up</Link>
        </p>
        </form>
        

        
    </div>
      
  );
}

export default LoginPage;
