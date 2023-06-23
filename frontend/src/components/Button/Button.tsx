import React, { MouseEventHandler } from 'react';
import { NavLink, To } from "react-router-dom";
import classNames from "classnames";

import './Button.scss';

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
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  title,
  children,
  href,
  to,
  onClick = () => console.warn('no OnClick function'),
  className,
  target,
  type
 }) => {

  if (href) {
    return (
      <a
        className={classNames('custom-button' , 'custom-button--link')}
        href={href}
        target={target}
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
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className={classNames('custom-button', 'custom-button--regular', className)}
      onClick={onClick}
      type={type}
    >
      {title}
      {children}
    </button>
  )
}
