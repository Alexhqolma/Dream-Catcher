import React, { MouseEventHandler } from 'react';
import { NavLink, To } from 'react-router-dom';
import classNames from 'classnames';

import './CustomButton.scss';
import { string } from 'yup';

export enum Target {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
}

export enum ButtonType {
  BUTTON = 'button',
  SUBMIT = 'submit',
  RESET = 'reset',
}

interface CustomButtonProps {
  href?: string;
  link?: string;
  title?: string;
  children?: React.ReactNode;
  to?: To;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  target?: Target.Blank;
  type?: ButtonType;
  width?: number | '100%';
  tabIndex: number;
  dataValue?: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  children,
  href,
  to,
  onClick = () => (type !== ButtonType.SUBMIT) && console.warn('no OnClick function'),
  className,
  target,
  type,
  width,
  tabIndex,
  dataValue,
 }) => {
  if (href) {
    return (
      <a
        className={classNames('custom-button' , 'custom-button--link', className)}
        href={href}
        target={target}
        tabIndex={tabIndex}
        data-value={dataValue}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <NavLink
        className={classNames('custom-button', 'custom-button--navLink', className)}
        to={to}
        tabIndex={tabIndex}
        data-value={dataValue}
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className={classNames('custom-button', 'custom-button--regular',
        { 'custom-button--width-definite': width },
        className,
      )}
      onClick={onClick}
      type={type}
      style={{ width: width === '100%' ? '100%' : `${width}px` }}
      tabIndex={tabIndex}
      data-value-id={dataValue}
    >
      {title}
      {children}
    </button>
  )
};
