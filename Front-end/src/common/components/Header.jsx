import React from "react";
import argentBankLogo from "./../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../app/actions/logoutAction";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.profil.user);
  

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(LogOut());
    navigate("/");
  };

  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
           <Link className="main-nav-item" to="/profil">
           <i className="fa fa-user-circle"></i>
           <span className="user-name-link">{user.userName}</span>
         </Link>
          ) : null}
          <Link
            to={isAuthenticated ? "/" : "/sign-in"}
            className="main-nav-item"
            onClick={isAuthenticated ? handleSignOut : undefined}
          >
            {isAuthenticated ? (
              <i className="fa fa-sign-out"></i>
            ) : (
              <i className="fa fa-user-circle"></i>
            )}
            {isAuthenticated ? "Sign Out" : "Sign In"}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
