import React from 'react';
import classNames from 'classnames';

import { Dream } from '../../types/Dream';
import { CustomButton } from '../Button';
import arrow from './../../assets/images/details-arrow-icon.svg';

import './DreamCard.catalog.scss';
import './DreamCard.horizontal.scss';
import './DreamCard.page.scss';

interface DreamItemProps {
  dream: Dream;
  pageMode?: boolean;
  horizontalMode?: boolean;
  catalogMode?: boolean;
}

export const DreamCard: React.FC<DreamItemProps> = ({ 
  dream,
  pageMode,
  horizontalMode, 
  catalogMode 
}) => {
  const isOwner = false;
  const isControlAvailable = false;

  return (
    <div className={classNames(
      'dream-card',
      {'dream-card--catalog': catalogMode },
      { 'dream-card--page': pageMode },
      { 'dream-card--horizontal': horizontalMode },
    )}>
      <div className="dream-card__description">
        <div className="dream-card__img">
          <img
            src={dream?.imageUrl || undefined} 
            alt="photo" 
          />
        </div>

        <div className='dream-card__info'>
          <h4 className={classNames('dream-card__title',
              { 'title' : horizontalMode },
            )}
          >
            {dream.title}
          </h4>
          <p className="dream-card__body">{dream.body}</p>
          <CustomButton 
            href={`/dream/${dream.id}`} 
          >
            <p className='dream-card__arrow-button'>Details&nbsp;&nbsp;&nbsp; <img src={arrow} alt="arrow" /></p>
          </CustomButton>
          <h4 className='dream-card__date-created'>{dream.userId}</h4>
        </div>
      </div>

      {isOwner && pageMode && <div className='dream-card__edit-mode'></div>}

      {isControlAvailable && pageMode && <div className='dream-card__controls'></div>}
    </div>
  );
};