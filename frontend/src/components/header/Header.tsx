import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/images/logo.png';
import { routes } from '../../routes/routerConfig';
import AuthForm from '../authForm/authForm';
import './Header.scss'


export const Header: React.FC = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);
  const { home, dreams, login, registration, user } = routes;

  const handleOpenAuthForm = () => {
    setShowAuthForm(true);
  };

  const handleCloseAuthForm = () => {
    setShowAuthForm(false);
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

          <li className="nav__item">
            <NavLink to={login.path} className="nav__link" onClick={handleOpenAuthForm}>
              Login
            </NavLink>
          </li>

          {showAuthForm && (
            <div className="login-popup-overlay">
              <div className="login-popup-container">
                <AuthForm />
                <button className="close-button" onClick={handleCloseAuthForm}>
                  Close
                </button>
              </div>
            </div>
          )}


          <li className="nav__item">
            <NavLink to={registration.path} className="nav__link">
              Registration
            </NavLink>
          </li>
          
          
          <li className="nav__item">
            <NavLink to={user.path.parent} className="nav__link">
              My Dreams
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
