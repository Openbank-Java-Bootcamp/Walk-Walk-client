import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import logout from "../images/logout_logo.png";
import logosmall from "../images/dog_logo_beige_small.png"






function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  
  return (
    <div className="container cyan brackets">
      <Link className="logo" to="/">
      <img className="logosmall" src={logosmall} alt="logosmall" />
      </Link>
        
        
          <a className="links"><Link to="/dogs">
            MY DOGS
          </Link></a>
          <a className="links"><Link to="/myactivities">
            MY ACTIVITIES
          </Link></a>
          <a className="links"><Link to="/">
            ACTIVITIES
          </Link></a>


          {/*<div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown button
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </div>*/}
          <span>HELLO, {user && user.username.toUpperCase()}</span>
          <button className="logoutButton"><img onClick={logOutUser} src={logout} alt="logout" /></button>
        
    </div>
  );
}

export default Navbar;
