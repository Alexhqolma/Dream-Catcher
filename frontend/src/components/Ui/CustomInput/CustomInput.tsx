import React from 'react';
import classNames from 'classnames';

import './CustomInput.scss';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
}

interface CustomInputProps {
  name: string;
  type: InputType;
  formik: any;
  placeholder?: string;
  className?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ 
  type,
  name,
  formik,
  placeholder,
  className,
}) => {
  const isError = formik.errors[name];
  const isTouched = formik.touched[name];

  return (
    <div className={classNames("CustomInput",
      { 'CustomInput--error': isError })}
    >
      <input
        id={name}
        name={name}
        type={type}
        className={classNames("CustomInput__input", className)}
        placeholder={placeholder ? placeholder : name.toUpperCase()}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />

      {(isTouched && isError) && <div className="CustomInput__error">{isError}</div>}
    </div>
  );
}