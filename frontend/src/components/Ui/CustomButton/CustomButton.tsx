import React, { MouseEventHandler } from 'react';
import { NavLink, To } from 'react-router-dom';
import classNames from 'classnames';

import './CustomButton.scss';

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

export enum ButtonStyle {
  HREF = 'HREF',
  TO = 'TO',
  BOX = 'BOX',
}

interface CustomButtonProps {
  buttonStyle?: ButtonStyle,
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
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  buttonStyle, 
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
 }) => {
  if (buttonStyle !== ButtonStyle.BOX && buttonStyle !== ButtonStyle.TO && href) {
    return (
      <a
        className={classNames('custom-button' , 'custom-button--link', className)}
        href={href}
        target={target}
        tabIndex={tabIndex}
      >
        {children}
      </a>
    )
  }

  if (buttonStyle !== ButtonStyle.HREF && buttonStyle !== ButtonStyle.BOX && to) {
    return (
      <NavLink
        className={classNames('custom-button', 'custom-button--navLink', className)}
        to={to}
        tabIndex={tabIndex}
      >
        {title}
        {children}
      </NavLink>
    )
  }

  return (
    <button 
      className={classNames(
        'custom-button', 'custom-button--regular', className,
        { 'custom-button--width-definite': width })}
      onClick={onClick}
      type={type}
      style={{ width: width === '100%' ? '100%' : `${width}px` }}
      tabIndex={tabIndex}
    >
      {title}
      {children}
    </button>
  )
};
