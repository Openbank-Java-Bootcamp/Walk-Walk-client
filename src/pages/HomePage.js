// src/pages/HomePage.js

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function HomePage() {
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
    return (
      <div>
        {isLoggedIn && (
        <>
          <Link to="/account">
            <button>My Account</button>
          </Link>
          <Link to="/activities">
            <button>Activities</button>
          </Link>
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