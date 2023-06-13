import React from 'react';
import { Dream } from '../../types/Dream';
import { Button } from '../Button';
import classNames from 'classnames';

import './DreamCard.scss';
import { routes } from '../../routes/routerConfig';

interface DreamItemProps {
  dream: Dream;
  page: string;
}

export const DreamCard: React.FC<DreamItemProps> = ({ dream, page }) => {
  const isOwner = false;
  const isControlAvailable = false;

  return (
    <div className={classNames(
      'dream-card',
      { 'dream-card--homepage': page === routes.home.name }
    )}>
      <div className="dream-card__description">
        <img
          className="dream-card__img" 
          src={dream?.photo || undefined} 
          alt="photo" 
        />

        <div className='dream-card__content'>
          <h4>{dream.userId}</h4>
          <h4 className="dream-card__title">{dream.title}</h4>
          <p className="dream-card__body">{dream.body}</p>
          <Button link={`/dream/${dream.id}`} title='Details'/>
        </div>
      </div>

      {isOwner && <div className='dream-card__edit-mode'></div>}

      {isControlAvailable && <div className='dream-card__controls'></div>}
    </div>
  );
};