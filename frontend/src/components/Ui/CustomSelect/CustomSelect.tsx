import React, { useState } from "react";
import classNames from "classnames";
import arrow from './../../../assets/images/arrow-down.svg';

import './CustomSelect.scss';

interface CustomSelectProps {
  onChange: (value: string) => void;
  className?: string;
  values: string[];
  valueForAll?: string;
  currentValue: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ 
  valueForAll,
  onChange = () => console.warn('no OnClick function'),
  className,
  values,
  currentValue,
 }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const toggleSelect  = () => {
    // console.log('isOpenSelect = ', isOpenSelect);
    setIsOpenSelect(isOpenSelect => !isOpenSelect);
  };

  const valueHandler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.stopPropagation();
    // console.log(e.currentTarget.dataset.value);
    onChange(e.currentTarget.dataset.value || 'no dataset.value');
    setTimeout(() => {
      toggleSelect();
    }, 200)
  };

  // console.log(currentValue, valueForAll);

  return (
    <div
      className={classNames(className, 'CustomSelect')}
      onClick={toggleSelect}
    > 
      <p className="CustomSelect__label">Dreams per page</p>

      <div className="CustomSelect__select-container">
        <ul
          className="CustomSelect__select"
          id="DreamsPerPage"
        >
          {!isOpenSelect && (
            <li
              data-value={currentValue}
              onClick={e => valueHandler(e)}
              className="CustomSelect__option"
            >
              {currentValue === valueForAll ? 'all' : currentValue}
            </li>
          )}

          {isOpenSelect && values.map(value => (
            <li
              key={value}
              data-value={value}
              onClick={e => valueHandler(e)}
              className="CustomSelect__option"
            >
              {value}
            </li>
          ))}

          {isOpenSelect && valueForAll && (
            <li 
              data-value={String(valueForAll)}
              onClick={e => valueHandler(e)}
              className="CustomSelect__option"
            >
              all
            </li>
          )}
        </ul>
      </div>

      <img className="CustomSelect__select-arrow" src={arrow} alt="arrow" />
    </div>
  )
}
