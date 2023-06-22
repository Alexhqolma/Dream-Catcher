import React, { MouseEventHandler } from 'react';
import { NavLink, To } from "react-router-dom";
import classNames from "classnames";

import './Button.scss';

export enum Target {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
}

interface ButtonProps {
  href?: string;
  link?: string;
  title?: string;
  children?: React.ReactNode;
  to?: To;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  target?: Target.Blank;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({ 
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
        className={classNames("button' , 'button__link")}
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
        className={classNames("button', 'button__navLink", className)}
        to={to}
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className={classNames("button', 'button__regular", className)}
      onClick={onClick}
      type={type}
    >
      {title}
      {children}
    </button>
  )
}
