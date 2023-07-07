import React from 'react';
import { DreamsContainer } from "../../components/DreamsContainer";

import './DreamsPage.scss';
import { ManagementLayout } from '../../components/layouts/Management.Layout';
import { useAppSelector } from '../../store/hooks';
import { selectAllDreams } from '../../store/features/allDreams/allDreamsSlice';

const DreamsPage: React.FC = () => {
  const list = useAppSelector(selectAllDreams);

  return (
    <main className="DreamsPage container">
      <h1 className="DreamsPage__title title">Dreams</h1>
      
      <DreamsContainer />

      <ManagementLayout list={list} />
    </main>
  );
}

export default DreamsPage;
