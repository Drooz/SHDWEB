import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/img/Logo_SHD.png";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src={logo} height="50" style={{ marginTop: 3 }} alt="SHD Zone" />
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps)(Navbar);
