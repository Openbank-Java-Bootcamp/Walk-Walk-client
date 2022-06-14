import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav className="Navbar">
      <Link to="/">
        🐕
      </Link>

      {isLoggedIn && (
        <>
        <span>{user && user.username.toUpperCase()}</span>
          <Link to="/dogs">
            <button>My dogs</button>
          </Link>
          <Link to="/myactivities">
            <button>My activities</button>
          </Link>
          
          <button onClick={logOutUser}>Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
