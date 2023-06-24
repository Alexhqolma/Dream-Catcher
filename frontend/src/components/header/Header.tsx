import React, { useEffect, useRef, useState } from 'react';
import { BsBox2Heart } from 'react-icons/bs';

import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectIsAuth, selectUser } from "../../store/features/user/userSlice";
import { CustomButton } from '../Ui/Button';
import logo from "../../assets/images/big_logo.png";

import "./Header.scss";

const Header: React.FC = () => {
  const { home, dreams, login, registration, user, favorites } = routes;
  const isAuth = useAppSelector(selectIsAuth);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const userId = useAppSelector(selectUser)?.userId;

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
      <CustomButton
        to="/"
        className="header__logo-link"
      >
        <img
          className="header__logo"
          src={logo}
          alt="NiceGadgets logo"
        />
      </CustomButton>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <CustomButton to={home.path} className="nav__link">
              Home
            </CustomButton>
          </li>

          <li className="nav__item">
            <CustomButton to={dreams.path} className="nav__link">
              Dreams
            </CustomButton>
          </li>

          {!isAuth && (
            <li className="nav__item">
              <CustomButton to={login.path} className="nav__link" onClick={handleOpenLoginPopup}>
                Login
              </CustomButton>
            </li>
          )}

          {!isAuth && (
            <li className="nav__item">
              <CustomButton to={registration.path} className="nav__link">
                Registration
              </CustomButton>
            </li>
          )}

          {isAuth && (
            <li className="nav__item">
              <CustomButton
                to={`${user.path.parent}/${userId}`}
                className="nav__link"
              >
                My Dreams
              </CustomButton>
            </li>
          )}

          <li className="nav__item nav__favorites-icon">
            <CustomButton to={favorites.path}>
              <BsBox2Heart />
              <div className="nav__favorites-count">0</div>
            </CustomButton>
          </li>
        </ul>
      </nav>

      {showLoginPopup && (
        <div className="login-popup-overlay">
          <div className="login-popup-container" ref={popupRef}>
            <CustomButton onClick={handleCloseLoginPopup}>Close</CustomButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;