import React from 'react';
import { Dream } from '../../types/Dream';
import { Button } from '../Button';

import './DreamCard.scss';

interface DreamItemProps {
  dream: Dream;
}

export const DreamCard: React.FC<DreamItemProps> = ({ dream }) => {
  return (
    <div className="dream-card">
      <img
        className="dream-card__img" 
        src={dream?.photo || undefined} 
        alt="photo" 
      />

      <div className="dream-card__content">
        <h4>{dream.userId}</h4>
        <h4 className="dream-card__title">{dream.title}</h4>
        <p className="dream-card__body">{dream.body}</p>
        <Button link={`/dream/${dream.id}`} title='Details'/>
      </div>
    </div>
  );
};