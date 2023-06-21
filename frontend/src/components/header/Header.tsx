import React, { useEffect, useRef, useState } from 'react';
import { BsBox2Heart } from 'react-icons/bs';

import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/features/user/userSlice";
import { LoginPopup } from "../LoginPopup"
import { Button } from '../Button';
import logo from "../../assets/images/big_logo.png";

import "./Header.scss";

  const Header: React.FC = () => {
  const { home, dreams, login, registration, user, favorites } = routes;
  const isAuth = Boolean(useAppSelector(selectUser));
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const userId = useAppSelector(selectUser)?.id;

  useEffect(() => {
    // console.log('render header');
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
      <Button
        to="/" 
        className="header__logo-link" 
      >
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </Button>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Button to={home.path} className="nav__link">
              Home
            </Button>
          </li>

          <li className="nav__item">
            <Button to={dreams.path} className="nav__link">
              Dreams
            </Button>
          </li>

          {!isAuth && (
            <li className="nav__item">
              <Button to={login.path} className="nav__link" onClick={handleOpenLoginPopup}>
                Login
              </Button>
            </li>
          )}

          {!isAuth && (
            <li className="nav__item">
              <Button to={registration.path} className="nav__link">
                Registration
              </Button>
            </li>
          )}

          {isAuth && (
            <li className="nav__item">
              <Button
                to={`${user.path.parent}/${userId}`}
                className="nav__link"
              >
                My Dreams
              </Button>
            </li>
          )}

          <li className="nav__item nav__favorites-icon">
            <Button to={favorites.path}>
              <BsBox2Heart />
              <div className="nav__favorites-count">0</div>
            </Button>
          </li>
        </ul>
      </nav>
      
      {showLoginPopup && (
        <div className="login-popup-overlay">
          <div className="login-popup-container" ref={popupRef}>
            <LoginPopup />
            <Button onClick={handleCloseLoginPopup}>Close</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;