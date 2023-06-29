import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import './CustomInput.scss';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  TEXTAREA = 'textarea',
}

interface CustomInputProps {
  name: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  error?: string;
  isTouched?: boolean;
  className?: string;
  label?: string;
  children?: ReactNode;
}

export const CustomInput: React.FC<CustomInputProps> = ({ 
  type,
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  isTouched,
  className,
  label,
  children,
}) => {
  return (
    <label 
      htmlFor={name}
      className={classNames("CustomInput",
        { 'CustomInput--error': error },
        className)}
    >
      <span className='CustomInput__label'>{label}</span>

      {children}

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : name.toUpperCase()}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />

      {(isTouched && error) && <div className="CustomInput__error">{error}</div>}
    </label>
  );
}
