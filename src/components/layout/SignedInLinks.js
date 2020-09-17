import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <div className="">
      <div>
        <ul className="right">
          <li>
            <NavLink to="/create">Post </NavLink>
          </li>
          <li>
            <a onClick={props.signOut}>Logout</a>
          </li>
          <li>
            <NavLink to="/" className="btn btn-floating pink lighten-1">
              NN
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
