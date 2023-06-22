import React from 'react';
import { DreamsContainer } from "../../components/DreamsContainer";
import './DreamsPage.scss';

const DreamsPage: React.FC = () => {
  return (
    <main className="DreamsPage container">
      <h1 className="DreamsPage__title title">Dreams</h1>
      
      <DreamsContainer />
    </main>
  );
}

export default DreamsPage;
