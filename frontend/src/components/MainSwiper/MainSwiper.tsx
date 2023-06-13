import React from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks';
import { selectMockData } from '../../mock/store/features/mock/mockSlice';
import { MainSLide } from './MainSLide';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import "./MainSwiper.scss";

export const MainSwiper: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 4);

  const settings = {
    dots: false,
    delay: 1000,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // pauseOnDotsHover: true,
    autoplay: true,
    // customPaging: () => (
    //   <div
    //     className="slick-dot"
    //     style={{
    //       width: '14px',
    //       height: '4px',
    //       marginTop: 18,
    //       marginRight: 14,
    //     }}
    //   />
    // ),
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings} className="slider">
        {dreams.map((dream) => (
          <MainSLide key={dream.id} dream={dream} />
        ))}
      </Slider>
    </div>
  );
};

