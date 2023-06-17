import React from 'react';
import { MainSwiper } from "../../components/MainSwiper";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../../components/DreamCard/DreamCard";

import './HomePage.scss';

const HomePage: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 2);

  return (
    <>
      <MainSwiper />

      <div className='dreamsCatalog'>
        {dreams.map(dream => (
          <DreamCard key={dream.id} dream={dream} isHorizontal={true} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
