import React from 'react';
import { Dream } from '../../types/Dream';

import './DreamCard.scss';
import { Link } from 'react-router-dom';

interface DreamItemProps {
  dream: Dream;
}

export const DreamCard: React.FC<DreamItemProps> = ({ dream }) => {
  return (
    <div className="dream-card">
      <h4 className="dream-card__title">{dream.title}</h4>
      <img className="dream-card__img" src={dream.photo ? dream.photo : undefined} alt="photo" />
      <p className="dream-card__body">{dream.body}</p>

      <Link to={`/dream/${dream.id}`}>Details</Link>
    </div>
  );
};