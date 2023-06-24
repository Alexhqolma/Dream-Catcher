import React from 'react';
import { DreamsContainer } from "../../components/DreamsContainer";

import './DreamsPage.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectDream } from '../../store/features/dream/dreamSlice';

const DreamsPage: React.FC = () => {
  console.log('render DreamsPage');

  return (
    <main className="DreamsPage container">
      <h1 className="DreamsPage__title title">Dreams</h1>
      
      <DreamsContainer />
    </main>
  );
}

export default DreamsPage;
