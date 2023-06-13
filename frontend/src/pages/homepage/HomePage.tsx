import React from "react";
import { MainSwiper } from "../../components/MainSwiper";
import { useAppSelector } from "../../store/hooks";
import { selectMockData } from "../../mock/store/features/mock/mockSlice";
import { DreamCard } from "../../components/DreamCard/DreamCard";
import { routes } from "../../routes/routerConfig";

const HomePage: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 2);

  return (
    <>
      <MainSwiper />

      <div>
        {dreams.map(dream => (
          <DreamCard key={dream.id} dream={dream} page={routes.home.name} />
        ))}
      </div>
    </>
  );
}

export default HomePage;
