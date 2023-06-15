import React from "react";
import Select from 'react-select'
import classNames from "classnames";

import './SelectPerPage.scss';

interface SelectPerPageProps {
  onChange?: (value: any) => void;
  className?: string;
  values: number[];
  countAllDreams?: number;
  defaultValue?: number;
}

export const SelectPerPage: React.FC<SelectPerPageProps> = ({
  countAllDreams: countDreams,
  onChange = () => console.warn('no OnChange function'),
  className,
  values,
  defaultValue,
}) => {

  const options = values.map((value) => ({
    value: value,
    label: String(value),
  }));

  if (countDreams) {
    options.push({
      value: countDreams,
      label: "all",
    });
  }

  return (
    <label
      htmlFor="DreamsPerPage"
      className={classNames('SelectPerPage', className)}
    >
      Dreams per page&nbsp;
      <Select
        value={{ value: defaultValue, label: String(defaultValue) }}
        className="DreamsPerPage__select"
        name="DreamsPerPage"
        id="DreamsPerPage"
        options={options}
        onChange={(selectedOption) => onChange(selectedOption?.value)}
      />
    </label>
  )
}