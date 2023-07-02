import React, { ChangeEventHandler, FocusEventHandler, ReactNode } from 'react';
import classNames from 'classnames';

import './CustomInput.scss';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
  TEXTAREA = 'textarea',
  IMAGE_LINK = 'url',
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
  label?: string;
  children?: ReactNode;
  tabIndex: number;
  className?: string;
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
  label,
  children,
  tabIndex,
  className,
}) => {
  return (
    <label 
      htmlFor={name}
      className={classNames('CustomInput',
        { 'CustomInput--withError': error },
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
        tabIndex={tabIndex}
      />

      {(isTouched && error) && <div className="CustomInput__error">{error}</div>}
    </label>
  );
}
