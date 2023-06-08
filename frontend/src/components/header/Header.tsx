import React, { memo } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';

export const Header: React.FC = memo(() => {

  return (
    <header className="header">
      <Link to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </Link>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to="/dreams" className="nav__link">
              Dreams
            </NavLink>
          </li>
          
          <li className="nav__item">
            <NavLink to="/myDreams" className="nav__link">
              My Dreams
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
});