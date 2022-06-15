// src/pages/HomePage.js

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ActivitiesListPage from "./ActivitiesListPage";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Navbar from '../components/Navbar';

function HomePage() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    return (
      <div>
        {isLoggedIn && (
      <div className="Home">
        
        <>
            <Navbar />
            <ActivitiesListPage />
            <Link to={"/activities/add"}><button id="btn">Add new activity</button></Link>
        </>
        </div>
      )}
      
      
      {!isLoggedIn && (

        <>
          <LoginPage />
        </>

      )}
      
      </div>
    );
  }
  
  export default HomePage;