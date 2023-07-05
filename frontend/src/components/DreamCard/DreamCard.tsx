import React, { useEffect } from 'react';
import classNames from 'classnames';

import { Dream, DreamsStatus } from '../../types/Dream';
import { CustomButton } from '../UI/CustomButton';
import arrow from './../../assets/images/details-arrow-icon.svg';

import './DreamCard.catalog.scss';
import './DreamCard.horizontal.scss';
import './DreamCard.page.scss';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectToken, selectUser } from '../../store/features/user/userSlice';
import { SagaActions, loadAllDreams, loadUserNODE, refuseDream, takeDream, updateDream } from '../../store/sagas/actions';
import { removeMockItem } from '../../mock/store/features/mock/mockSlice';
import { ItemCardLayout } from '../layouts/ItemCard.Layout/ItemCard.Layout';

interface DreamItemProps {
  dream: Dream;
  pageMode?: boolean;
  horizontalMode?: boolean;
  catalogMode?: boolean;
  tabIndex: number,
}

export const DreamCard: React.FC<DreamItemProps> = ({
  dream,
  pageMode,
  tabIndex,
}) => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken) || '';
  const isOwner = false;
  const isControlAvailable = false;
  const user = useAppSelector(selectUser);

  return (
    <>
      <div className="DreamCard">
        <ItemCardLayout item={dream} className="DreamCard__view" tabIndex={tabIndex} />

        <div className="DreamCard__controls">
          <p>status: {dream.status === DreamsStatus.TAKEN ? 'TAKEN' : 'POSTED'}</p>

          <p style={{ backgroundColor: 'green' }}>{(dream.user === user?.userId) && 'YOUR CARD'}</p>
          <p>handler: {dream.handler}</p>

          {isOwner && pageMode && <div className='item-card__edit-mode'></div>}

          {isControlAvailable && pageMode && <div className='item-card__controls'></div>}

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
          {/* <div className="item-card__controls">
            {user?.userId === dream.user && (
              <CustomButton 
                onClick={() => dispatch(updateDream({
                  dream: {
                    ...item,
                    title: 'updated title',
                  },
                  token,
                }))} 
                tabIndex={0}
              >
                Update
              </CustomButton>
            )}

            {user?.userId !== dream.user && dream.handler === null && (
              <CustomButton 
                onClick={() => dispatch(takeDream({ dream: item, token }))} 
                tabIndex={0}
              >
                Take
              </CustomButton>
            )}

            {user?.userId !== dream.user && dream.handler === user?.userId && (
              <CustomButton 
                onClick={() => dispatch(refuseDream({ dream: item, token }))} 
                tabIndex={0}
              >
                Refuse
              </CustomButton>
            )}
          </div> */}

        </div>
      </div>
    </>
  );
};