import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/img/Logo_SHD.png";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth } = props;
  console.log(auth);
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <Link to="/" className="brand-logo">
          <img src={logo} height="50" style={{ marginTop: 3 }} alt="SHD Zone" />
        </Link>
        {links}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
