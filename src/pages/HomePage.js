// src/pages/HomePage.js

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import ActivitiesListPage from "./ActivitiesListPage";

function HomePage() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    return (
      <div>
        {isLoggedIn && (
        <>
            <ActivitiesListPage />
            <Link to={"/activities/add"}><button>Add new activity</button></Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          WELCOME!!
        </>
      )}
      </div>
    );
  }
  
  export default HomePage;