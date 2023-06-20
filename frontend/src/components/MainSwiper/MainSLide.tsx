import React, { useEffect } from 'react';
import { Dream } from '../../types/Dream';
import { Button } from '../Button';

import './MainSLide.scss';

interface MainSlideProps {
  dream: Dream;
}

export const MainSLide: React.FC<MainSlideProps> = ({ dream }) => {
  useEffect(() => {
  }, [dream]);

  const styleTitle = {
    top: `calc(${Math.random() * 10}% + 10%)`,
  };
  
  const styleBody = {
    bottom: `calc(${Math.random() * 20}% + 10%)`,
  }; 

  return (
    <div className="slider__banner">
      {dream && (
        <>
          <img className="slider__main-img" src={dream.photo || undefined} alt="" />
          <div
            className='slider__main-title title'
            style={styleTitle}
          >
            <h1>{dream.title}</h1>
          </div>
          <div 
            className='slider__main-body'
            style={styleBody}
          >
            <p>{dream.text}&nbsp;</p>
            <Button to={`/dream/${dream.id}`}>details...</Button>
          </div>
        </>
      )}
    </div>
  );
};
