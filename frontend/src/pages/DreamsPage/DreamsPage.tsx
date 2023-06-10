import React from "react";
import { DreamsContainer } from "../../components/DreamsContainer";
import { DreamItem } from "../../components/dreamItem/small";

const DreamsPage: React.FC = () => {
  return (
    <>
      <div className="container">
        <h1>DreamsPage</h1>

        <NavLink to="/dream/testId" className="nav__link">
          <DreamItem />
        </NavLink>
      </div>
    </>
  );
}

export default DreamsPage;
