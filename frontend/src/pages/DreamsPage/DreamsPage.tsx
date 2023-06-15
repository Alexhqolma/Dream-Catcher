import React from "react";
import { DreamsContainer } from "../../components/DreamsContainer";
import './DreamsPage.scss';

const DreamsPage: React.FC = () => {
  return (
    <div className="DreamsPage">
      <h1 className="DreamsPage__title title">Dreams</h1>
      <DreamsContainer />
    </div>
  );
}

export default DreamsPage;
