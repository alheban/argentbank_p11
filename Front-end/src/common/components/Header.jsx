import React from "react";
import argentBankLogo from "./../../assets/argentBankLogo.png";
import { Link, NavLink } from "react-router-dom";

function Header() {
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
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
