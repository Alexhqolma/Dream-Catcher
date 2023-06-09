import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/big_logo.png';
import { routes } from '../../routes/routerConfig';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/features/user/userSlice';
import AuthForm from '../authForm/authForm';



export const Header: React.FC = () => {
  const { home, dreams, login, registration, user } = routes;
  const isAuth = Boolean(useAppSelector(selectUser));
  const [showLoginPopup, setShowLoginPopup] = useState(false);


  useEffect(() => {
    console.log('render header');
  }, [isAuth]);

  const handleOpenLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

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
                <div className="login-popup-container">
                  <AuthForm />
                  <button className="close-button" onClick={handleCloseLoginPopup}>
                    Close
                  </button>
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
        </ul>
      </nav>
    </header>
  );
};