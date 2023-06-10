import React from "react";
<<<<<<< Updated upstream
import { DreamsContainer } from "../../components/DreamsContainer";
=======
import { NavLink } from "react-router-dom";
import { DreamItem } from "../../components/dreamItem/small";
>>>>>>> Stashed changes

const DreamsPage: React.FC = () => {
  return (
      <div className="container">
        <h1>DreamsPage</h1>
<<<<<<< Updated upstream
        <DreamsContainer />
=======

        <NavLink to="/dream/testId" className="nav__link">
          <DreamItem />
        </NavLink>
>>>>>>> Stashed changes
      </div>
  );
}

export default DreamsPage;
