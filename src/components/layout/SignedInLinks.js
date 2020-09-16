import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <div className="container">
      <div>
        <ul className="right">
          <li>
            <NavLink to="/create">Post </NavLink>
          </li>
          <li>
            <NavLink to="/">Logout</NavLink>
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
export default SignedInLinks;
