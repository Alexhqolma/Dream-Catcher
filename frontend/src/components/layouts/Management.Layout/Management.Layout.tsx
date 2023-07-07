import React, { useEffect, useState } from 'react';

import { Dream } from '../../../types/Dream';
import { AsideControls } from './AsideControls/AsideControls';
import { DreamCard } from '../../DreamCard/DreamCard';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { selectScreen } from '../../../store/features/controls/controlsSlice';
import { SCREEN } from '../../../types/Screen';
import { CustomButton } from '../../UI/CustomButton';
import { DreamForm, DreamFormType } from '../../DreamForm';
import { loadAllDreams } from '../../../store/sagas/actions';
import { resetState } from '../../../store/features/dream/dreamSlice';

import './Management.Layout.scss';

enum CONTENT {
  CARD = 'CARD',
  EDIT_MODE = 'EDIT_MODE',
  MESSAGES = 'MESSAGES',
}
interface ManagementLayoutProps {
  list: Dream[];
}

export const ManagementLayout: React.FC<ManagementLayoutProps> = ({ 
  list, 
}) => {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(selectScreen) === SCREEN.W_320;
  const [current, setCurrent] = useState<Dream | null>(null);
  const [contentType, setContentType] = useState<CONTENT>(CONTENT.CARD);

  const onCLickCurrentHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newCurrent = list.find(el => el.id === e.currentTarget.dataset.valueId);

    console.log(newCurrent, newCurrent?.id, current?.id);

    if (newCurrent && newCurrent.id !== current?.id) {
      setCurrent(newCurrent);
      setContentType(CONTENT.CARD);
    }
  };

  const onCLickEditModeHandler = () => setContentType(CONTENT.EDIT_MODE);
  const isEditNode = contentType === CONTENT.EDIT_MODE;
  const isCard = contentType === CONTENT.CARD;

  const callbackAfterSubmit = () => {
    setTimeout(() => {
      setContentType(CONTENT.CARD);
      dispatch(loadAllDreams());
      dispatch(resetState());
    }, 3001);
  };

  useEffect(() => {
    console.log('useEffect first');
    setCurrent(list[0]);
  }, [list])

  useEffect(() => {
    console.log('useEffect current');
  }, [current])

  console.log('render ManagementLayout', current, list.length);

  const childContent = 
    <div className='ManagementLayout__content'>
      {current && isCard && <DreamCard dream={current} tabIndex={0} />}
      {current && isEditNode
        ? <DreamForm
            dreamInitial={current} 
            startTabIndex={0} 
            type={DreamFormType.UPDATE}
            cbAfterSubmit={callbackAfterSubmit}
            cbBackButton={() => setContentType(CONTENT.CARD)} 
          />
        : <CustomButton 
            onClick={onCLickEditModeHandler}
            tabIndex={-100}
            title='Edit'
          />}
      {/* <Messaging /> */}
    </div>

  return (
    <section className='ManagementLayout'>
      <div className="ManagementLayout__container">
        <AsideControls 
          className="ManagementLayout__controls"
          current={current}
          list={list}
          onClickItem={onCLickCurrentHandler}
          child={isMobile && childContent}
        />

        {!isMobile && childContent}
      </div>
    </section>
  );
};
