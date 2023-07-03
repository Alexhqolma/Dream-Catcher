import React from 'react';
import { MainSwiper } from "../../components/MainSwiper";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { ItemHorizone } from '../../components/layouts/ItemHorizone.Layout/ItemHorizone.Layout';

import './HomePage.scss';

const HomePage: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 2);

  return (
    <>
      <MainSwiper />

      <div className='dreamsCatalog'>
        {dreams.map(dream => (
          <ItemHorizone key={dream.id} dream={dream} horizontalMode={true} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
