import React, { useEffect } from 'react';
import { BsBox2Heart } from 'react-icons/bs';

import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectIsAuth, selectUser } from "../../store/features/user/userSlice";
import { CustomButton } from '../UI/CustomButton';
import logo from "../../assets/images/big_logo.png";

import "./Header.scss";

const Header: React.FC = () => {
  const { home, dreams, login, registration, user, favorites } = routes;
  const isAuth = useAppSelector(selectIsAuth);
  const userId = useAppSelector(selectUser)?.userId;

  useEffect(() => {
    // console.log('render header');
  }, [isAuth]);

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
          tabIndex={1}
        />
      </CustomButton>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item" tabIndex={2}>
            <CustomButton to={home.path} className="nav__link" 
            >
              Home
            </CustomButton>
          </li>

          <li className="nav__item" tabIndex={3}>
            <CustomButton to={dreams.path} className="nav__link">
              Dreams
            </CustomButton>
          </li>

          {!isAuth && (
            <li className="nav__item" tabIndex={4}>
              <CustomButton to={login.path} className="nav__link">
                Login
              </CustomButton>
            </li>
          )}

          {!isAuth && (
            <li className="nav__item" tabIndex={5}>
              <CustomButton to={registration.path} className="nav__link">
                Registration
              </CustomButton>
            </li>
          )}

          {isAuth && (
            <li className="nav__item" tabIndex={6}>
              <CustomButton
                to={`${user.path.parent}/${userId}`}
                className="nav__link"
              >
                My Dreams
              </CustomButton>
            </li>
          )}

          <li className="nav__item nav__favorites-icon" tabIndex={7}>
            <CustomButton to={favorites.path}>
              <BsBox2Heart />
              <div className="nav__favorites-count">0</div>
            </CustomButton>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;