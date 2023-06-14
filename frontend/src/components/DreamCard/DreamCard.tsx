import React from 'react';
import { Dream } from '../../types/Dream';
import { Button } from '../Button';
import classNames from 'classnames';

import './DreamCard.scss';
import { routes } from '../../routes/routerConfig';
import arrow from './../../assets/images/details-arrow-icon.svg';

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
        <div className="dream-card__img">
          <img
            src={dream?.photo || undefined} 
            alt="photo" 
          />
        </div>

        <div>
          <h4 className="dream-card__title">{dream.title}</h4>
          <p className="dream-card__body">{dream.body}</p>
          <Button 
            href={`/dream/${dream.id}`} 
          >
            <p className='dream-card__arrow-button'>Details&nbsp;&nbsp;&nbsp; <img src={arrow} alt="arrow" /></p>
          </Button>
          <h4 className='dream-card__date-created'>{dream.userId}</h4>
        </div>
      </div>

      {isOwner && <div className='dream-card__edit-mode'></div>}

      {isControlAvailable && <div className='dream-card__controls'></div>}
    </div>
  );
};