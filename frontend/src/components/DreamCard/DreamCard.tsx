import React, { useEffect } from 'react';
import classNames from 'classnames';

import { Dream } from '../../types/Dream';
import { CustomButton } from '../UI/CustomButton';
import arrow from './../../assets/images/details-arrow-icon.svg';

import './DreamCard.catalog.scss';
import './DreamCard.horizontal.scss';
import './DreamCard.page.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectToken } from '../../store/features/user/userSlice';
import { SagaActions, loadUserNODE } from '../../store/sagas/actions';
import { removeMockItem } from '../../mock/store/features/mock/mockSlice';

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
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);
  const isOwner = false;
  const isControlAvailable = false;

  return (
    <div className={classNames(
      'dream-card',
      { 'dream-card--catalog': catalogMode },
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
          <div className='dream-card__text'>
            <h4 className={classNames('dream-card__title',
              { 'title': horizontalMode }
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
            <h4 className='dream-card__date-created'>{dream.user}</h4>
          </div>
        </div>
      </div>

      {isOwner && pageMode && <div className='dream-card__edit-mode'></div>}

      {isControlAvailable && pageMode && <div className='dream-card__controls'></div>}

      {/* <CustomButton onClick={() => {
        dispatch({
          type: SagaActions.CREATE_DREAM,
          payload: {
            token,
            dream,
          }
        });

        dispatch(removeMockItem(dream));
      }
      }
      >
        teleport
      </CustomButton> */}
    </div>
  );
};