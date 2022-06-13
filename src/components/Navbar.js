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
          <button onClick={user}>My Account</button>
          <button onClick={logOutUser}>Logout</button>
          <Link to="/dogs">
            <button>My dogs</button>
          </Link>
          <span>{user && user.name.toUpperCase()}</span>
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
