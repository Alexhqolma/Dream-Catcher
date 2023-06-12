import React from "react";
import { Link } from "react-router-dom";

import './Button.scss';

type ButtonProps = {
  link?: string;
  title: string;
};

export const Button: React.FC<ButtonProps> = ({ link, title}) => {
  return (
    { link? && <Link to = { link } className = 'button' > { title }</Link> }
  )
}