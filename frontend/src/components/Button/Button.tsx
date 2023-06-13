import React, { MouseEventHandler } from "react";
import { NavLink, To } from "react-router-dom";
import classNames from "classnames";

// import './Button.scss';

// button - title, onClick, children 
// link - to, title, children
// a href mailto call - href, title, children

type ButtonProps = {
  href?: string;
  link?: string;
  title?: string;
  children?: React.ReactNode;
  to?: To;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ 
  title,
  children,
  href,
  to,
  onClick = () => console.warn('no OnClick function'),
  className,
 }) => {

  if (href) {
    return (
      <a
        className={classNames("button', 'button--external-link", className)}
        href={href}
      >
        {title}
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <NavLink
        className={classNames("button', 'button--navLink", className)}
        to={to}
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className={classNames('button', 'button--regular', className)}
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
