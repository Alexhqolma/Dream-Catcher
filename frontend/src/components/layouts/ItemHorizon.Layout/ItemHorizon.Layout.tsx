import React from 'react';
import classnames from 'classnames';

import { Dream } from '../../../types/Dream';
import { CustomButton } from '../../UI/CustomButton';
import arrow from './../../../assets/images/details-arrow-icon.svg';

import './ItemHorizon.Layout.scss';

export enum ItemHorizon { IMG_LEFT, IMG_RIGHT }

interface ItemHorizonProps {
  item: Dream;
  type: ItemHorizon,
  classNames?: string,
}

export const ItemHorizonLayout: React.FC<ItemHorizonProps> = ({ 
  item, 
  type,
  classNames,
}) => {
  return (
    <div 
      className={classnames('ItemHorizonLayout', classNames,
        { 'ItemHorizonLayout--left' : type === ItemHorizon.IMG_LEFT },
        { 'ItemHorizonLayout--right' : type === ItemHorizon.IMG_RIGHT }
      )}
    >
      <div className="ItemHorizonLayout__container">
        <div className="ItemHorizonLayout__img">
          <img
            src={item?.imageUrl || undefined}
            alt="photo"
          />
        </div>

        <div className='ItemHorizonLayout__info'>
          <h4 className="ItemHorizonLayout__title title">
            {item.title}
          </h4>

          <p className="ItemHorizonLayout__body">{item.body}</p>

          <CustomButton 
            href={`/dream/${item.id}`} 
            tabIndex={0} 
            className='ItemHorizonLayout__arrow-button'
          >
            <p>Details&nbsp;&nbsp;&nbsp; <img src={arrow} alt="arrow" /></p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
