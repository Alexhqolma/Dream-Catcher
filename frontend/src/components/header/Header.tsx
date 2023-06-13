import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsBox2Heart } from 'react-icons/bs';

import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/features/user/userSlice";
import { LoginPopup } from "../loginPopup"
import logo from "../../assets/images/big_logo.png";

import "./Header.scss";

export const Header: React.FC = () => {
  const { home, dreams, login, registration, user } = routes;
  const isAuth = Boolean(useAppSelector(selectUser));
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('render header');
  }, [isAuth]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowLoginPopup(false);
      }
    };

    window.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOpenLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header__logo-link">
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </NavLink>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink to={home.path} className="nav__link">
              Home
            </NavLink>
          </li>

          <li className="nav__item">
            <NavLink to={dreams.path} className="nav__link">
              Dreams
            </NavLink>
          </li>

          {!isAuth && (
            <li className="nav__item">
              <NavLink to={login.path} className="nav__link" onClick={handleOpenLoginPopup}>
                Login
              </NavLink>
            </li>
          )}

          {showLoginPopup && (
            <div className="login-popup-overlay">
              <div className="login-popup-container" ref={popupRef}>
                <LoginPopup />
                <a onClick={handleCloseLoginPopup}>Close</a>
              </div>
            </div>
          )}

          {!isAuth && (
            <li className="nav__item">
              <NavLink to={registration.path} className="nav__link">
                Registration
              </NavLink>
            </li>
          )}

          {isAuth && (
            <li className="nav__item">
              <NavLink to={user.path.parent} className="nav__link">
                My Dreams
              </NavLink>
            </li>
          )}

          <li className="nav__item nav__favorites-icon">
            <NavLink to={routes.favorites.path}>
              <BsBox2Heart />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
