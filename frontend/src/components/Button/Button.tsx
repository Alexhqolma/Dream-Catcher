import React, { MouseEventHandler } from "react";
import { NavLink, To } from "react-router-dom";

import './Button.scss';

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
};

export const Button: React.FC<ButtonProps> = ({ title, children, href, to, onClick }) => {

  if (href) {
    return (
      <a
        className="button button--external-link"
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
        className="button button--navLink"
        to={to}
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className='button button--regular'
      onClick={onClick}
    >
      {title}
      {children}
    </button>
  )
}
