import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

import './SelectPerPage.scss';

interface SelectPerPageProps {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  className?: string;
  values: number[];
  countAllDreams?: number;
  defaultValue?: number;
}

export const SelectPerPage: React.FC<SelectPerPageProps> = ({ 
  countAllDreams,
  onChange = () => console.warn('no OnClick function'),
  className,
  values,
  defaultValue,
 }) => {

  return (
    <label 
      htmlFor="DreamsPerPage" 
      className={classNames('SelectPerPage', className)}
    >
      Dreams per page&nbsp;
      <select
        value={defaultValue}
        className="DreamsPerPage__select"
        name="DreamsPerPage"
        id="DreamsPerPage"
        onChange={onChange}
      >
        {values.map(value => (
          <option
            key={value}
            value={String(value)}
          >
              {value}
          </option>
        ))}
        {countAllDreams && (
          <option value={String(countAllDreams)}>all</option>
        )}
      </select>
    </label>
  )
}
