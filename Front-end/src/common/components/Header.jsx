import React from "react";
import argentBankLogo from "./../../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../app/actions/authActions";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.profil.user);

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
  };

  return (
    <>
      <nav className="main-nav">
        <Link className="main-nav-logo" href="./index.html">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          {isAuthenticated ? (
            <Link className="main-nav-item" to=""
            onClick={(e) => e.preventDefault()}>
              <i className="fa fa-user-circle"></i>
              {user.userName}
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
