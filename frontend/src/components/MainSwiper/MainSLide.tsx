import React, { useEffect } from 'react';
import { Dream } from '../../types/Dream';

import './MainSLide.scss';
import { Link } from 'react-router-dom';

interface MainSlideProps {
  dream: Dream;
}
export const MainSLide: React.FC<MainSlideProps> = ({ dream }) => {
  useEffect(() => {
    console.log('render slide');
  }, [dream]);

  return (
    <div className="slider__banner">
      {dream && (
        <>
          <img className="slider__main-img" src={dream.photo || undefined} alt="" />
          <div className='slider__main-title'><h1>{dream.title}</h1></div>
          <div className='slider__main-body'>
            <p>{dream.body}&nbsp;</p>
            <Link to={`/dream/${dream.id}`}>details...</Link>
          </div>
        </>
      )}
    </div>
  );
};
