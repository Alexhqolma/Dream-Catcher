import React from 'react';
import classNames from 'classnames';

import { Dream, DreamsStatus } from '../../../types/Dream';
import { CustomButton } from '../../UI/CustomButton';
import arrow from './../../assets/images/details-arrow-icon.svg';

import './ItemPage.Layout.scss';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectToken, selectUser } from '../../../store/features/user/userSlice';
import { refuseDream, takeDream, updateDream } from '../../../store/sagas/actions';

interface ItemPageLayoutProps {
  dream: Dream;
  pageMode?: boolean;
  horizontalMode?: boolean;
  catalogMode?: boolean;
}

export const ItemPageLayout: React.FC<ItemPageLayoutProps> = ({
  dream,
  pageMode,
  horizontalMode,
  catalogMode
}) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken) || '';
  const isOwner = false;
  const isControlAvailable = false;
  const user = useAppSelector(selectUser);

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

            <CustomButton href={`/dream/${dream.id}`} tabIndex={0}>
              <p className='dream-card__arrow-button'>Details&nbsp;&nbsp;&nbsp; <img src={arrow} alt="arrow" /></p>
            </CustomButton>

            {/* <h4 className='dream-card__date-created'>{dream.user}</h4> */}

            <p>status: {dream.status === DreamsStatus.TAKEN ? 'TAKEN' : 'POSTED'}</p>
            <p style={{ backgroundColor: 'green' }}>{(dream.user === user?.userId) && 'YOUR CARD'}</p>
            <p>handler: {dream.handler}</p>
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

      {/* <CustomButton onClick={onClick}>Update</CustomButton> */}

      {user?.userId === dream.user && (
        <CustomButton onClick={() => dispatch(updateDream({
          dream: {
            ...dream,
            title: 'updated title',
          },
          token
        }))} tabIndex={0}>Update</CustomButton>
      )}

      {user?.userId !== dream.user && dream.handler === null && (
        <CustomButton onClick={() => dispatch(takeDream({ dream, token }))} tabIndex={0}>Take</CustomButton>
      )}

      {user?.userId !== dream.user && dream.handler === user?.userId && (
        <CustomButton onClick={() => dispatch(refuseDream({ dream, token }))} tabIndex={0}>Refuse</CustomButton>
      )}

    </div>
  );
};