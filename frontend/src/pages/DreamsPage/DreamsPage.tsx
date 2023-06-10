import React from "react";
import { DreamsContainer } from "../../components/DreamsContainer";
import './DreamsPage.scss';

const DreamsPage: React.FC = () => {
  return (
      <div className="container">
        <h1>DreamsPage</h1>
        <DreamsContainer />
      </div>
  );
}

export default DreamsPage;
