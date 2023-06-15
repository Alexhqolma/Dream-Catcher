import React, { MouseEventHandler } from "react";
import { NavLink, To } from "react-router-dom";
import classNames from "classnames";

import './Button.scss';

// button - title, onClick, children 
// link - to, title, children
// a href mailto call - href, title, children

interface ButtonProps {
  href?: string;
  link?: string;
  title?: string;
  children?: React.ReactNode;
  to?: To;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  target?: 'blank';
}

export const Button: React.FC<ButtonProps> = ({ 
  title,
  children,
  href,
  to,
  onClick = () => console.warn('no OnClick function'),
  className,
  target,
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
      className={classNames('button', 'button__regular', className)}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
