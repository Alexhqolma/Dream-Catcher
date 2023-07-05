import React from 'react';
import { MainSwiper } from "../../components/MainSwiper";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { ItemHorizon, ItemHorizonLayout } from '../../components/layouts/ItemHorizon.Layout/ItemHorizon.Layout';

import './HomePage.scss';

const HomePage: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 4);

  return (
    <main className="HomePage">
      <section className="HomePage__title">
        <MainSwiper />
      </section>

      <section className="HomePage__some-dreams">
        <h2 className="HomePage__some-dreams-title title">Some Dreams</h2>

        {dreams.map((dream, index) => (
          <ItemHorizonLayout 
            key={dream.id} 
            item={dream}
            type={index % 2 ? ItemHorizon.RIGHT : ItemHorizon.LEFT }
          />
        ))}
      </section>

      <div className='dreamsCatalog'>
      </div>
    </main>
  );
}

export default HomePage;
