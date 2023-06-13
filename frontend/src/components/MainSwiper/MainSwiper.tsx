import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../store/hooks';
import { selectMockData } from '../../mock/store/features/mock/mockSlice';
import { Dream } from '../../types/Dream';


import "./MainSwiper.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const swiperSettings = {
  spaceBetween: 0,
  slidesPerView: 1,
  autoplay: { 
    delay: 400,
    stopOnLastSlide: true,
  },
  onSlideChange: () => console.log('slide change'),
  onSwiper: (swiper: any) => console.log(swiper),
};

export const MainSwiper: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 4);

  return (
    <>
      <Swiper
        {...swiperSettings}
        className="main-swiper"
      >
        {dreams.map(dream => (
          <SwiperSlide
            key={dream.id}
          >
            <MainSLide dream={dream} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>

      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      <div className="swiper-scrollbar"></div>
    </>
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