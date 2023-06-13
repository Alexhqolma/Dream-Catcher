import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import "./MainSwiper.scss";
import { useAppSelector } from '../../store/hooks';
import { selectMockData } from '../../mock/store/features/mock/mockSlice';
import { Dream } from '../../types/Dream';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const MainSwiper: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 4);

  return (
    <Swiper
      className="main-swiper"
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ 
        delay: 400,
        stopOnLastSlide: true,
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {dreams.map(dream => (
        <SwiperSlide
          key={dream.id}
        >
          <MainSLide dream={dream} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

interface MainSlideProps {
  dream: Dream;
}

const MainSLide: React.FC<MainSlideProps> = ({ dream }) => {
  useEffect(() => {
    console.log('render slide');
  }, [dream]);

  return (
    <div className='main-slide'>
      {dream && (
        <img src={dream.photo || undefined} alt="" />
      )}
    </div>
  )
};