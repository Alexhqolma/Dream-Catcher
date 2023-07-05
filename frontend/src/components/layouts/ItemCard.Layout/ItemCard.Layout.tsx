import React from 'react';

import arrow from '../../../assets/images//details-arrow-icon.svg';
import { CustomButton } from '../../UI/CustomButton';
import { Dream } from '../../../types/Dream';

import './ItemCard.Layout.scss';
import classNames from 'classnames';

interface DreamItemProps {
  item: Dream;
  className?: string;
  tabIndex: number;
}

export const ItemCardLayout: React.FC<DreamItemProps> = ({ item, className, tabIndex }) => {
  return (
    <div className={classNames("ItemCardLayout", className)}>
      <div className="ItemCardLayout__img">
        <img
          src={item?.imageUrl || undefined}
          alt="photo"
        />
      </div>

      <div className='ItemCardLayout__info'>
        <div className='ItemCardLayout__text'>
          <h4 className='ItemCardLayout__title'>
            {item.title}
          </h4>

          <p className="ItemCardLayout__body">{item.body}</p>

          <CustomButton 
            href={`/dream/${item.id}`} 
            tabIndex={tabIndex}
          >
            <p className='ItemCardLayout__arrow-button'>Details&nbsp;&nbsp;&nbsp; <img src={arrow} alt="arrow" /></p>
          </CustomButton>
        </div>
      </div>
    </div>
  );
};
