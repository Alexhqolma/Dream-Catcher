import React from "react";
import { NavLink } from "react-router-dom";

export const DreamsPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1>DreamsPage</h1>

        <NavLink to="/dream/testId" className="nav__link">
          Test Dream
        </NavLink>
      </div>
    </>
  );
}