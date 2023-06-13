import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useAppSelector } from '../../store/hooks';
import { selectMockData } from '../../mock/store/features/mock/mockSlice';
import { Dream } from '../../types/Dream';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

// export const MainSwiper: React.FC = () => {
//   const dreams = useAppSelector(selectMockData).slice(0, 4);

//   return (
//     <>
//       <Swiper
//         {...swiperSettings}
//         className="main-swiper"
//       >
//         {dreams.map(dream => (
//           <SwiperSlide
//             key={dream.id}
//           >
//             <MainSLide dream={dream} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// };


export const MainSwiper: React.FC = () => {
  const dreams = useAppSelector(selectMockData).slice(0, 4);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    pauseOnDotsHover: true,
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

interface MainSlideProps {
  dream: Dream;
}

const MainSLide: React.FC<MainSlideProps> = ({ dream }) => {
  useEffect(() => {
    console.log('render slide');
  }, [dream]);

  return (
    <div className="slider__banner">
      {dream && (
        <img className="slider__main-img" src={dream.photo || undefined} alt="" />
      )}
    </div>
  )
};