import React, { useEffect, useRef, useState } from 'react';
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';

import { CustomButton, Target } from "../Ui/Button";
import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/features/user/userSlice";
// import { LoginPopup } from "../LoginPopup"

import "./Footer.scss";

const Footer: React.FC = () => {
  const { home, dreams, login, registration, user, favorites } = routes;
  const isAuth = Boolean(useAppSelector(selectUser));
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const userId = useAppSelector(selectUser)?.id;

  useEffect(() => {
    // console.log('render footer');
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
    <footer className="footer">
      <div className="footer__about">
        <div>
          <CustomButton to="/" className="footer__logo-link">
            Dream Catcher
          </CustomButton>
          <p className="footer__watchword">dreams can come true...</p>
        </div>

        <p className="footer__team-info">
          this site was created by a team of five people.
          <br />
          ©2023 All rights reserved
        </p>
      </div>

      <div className="footer__contact">
        <CustomButton href="mailto:info@dream_catcher.com">
          info@dream_catcher.com
        </CustomButton>

        <CustomButton href="tel:+38095-456-78-90">
          +38 (095) 456 78 90
        </CustomButton>

        <div className="footer__social-links">
          <CustomButton
            href="https://web.telegram.org"
            target={Target.Blank}
          >
            <BsTelegram size={30} />
          </CustomButton>

          <CustomButton
            href="https://facebook.com"
            target={Target.Blank}
          >
            <BsFacebook size={30} />
          </CustomButton>

          <CustomButton
            href="https://twitter.com"
            target={Target.Blank}
          >
            <BsTwitter size={30} />
          </CustomButton>
        </div>
      </div>

      <div className="footer__navigation">
        <div>
          <CustomButton className="footer__navLink" to={home.path}>
            Home
          </CustomButton>
          <CustomButton className="footer__navLink" to={dreams.path}>
            Dreams
          </CustomButton>
          <CustomButton className="footer__navLink" to={login.path}>
            Log in
          </CustomButton>
          <CustomButton className="footer__navLink" to={registration.path}>
            Registration
          </CustomButton>
          {isAuth && (
            <><CustomButton
              className="footer__navLink"
              to={`${user.path.parent}/${userId}`}
            >
              My Dreams
            </CustomButton>
              <CustomButton className="footer__navLink" to={favorites.path}>
                Favorites
              </CustomButton>
            </>
          )}
          <CustomButton className="footer__navLink" to={login.path}>
            Login
          </CustomButton>
        </div>
      </div>
      {showLoginPopup && (
        <div className="login-popup-overlay">
          <div className="login-popup-container" ref={popupRef}>
            <LoginPopup />
            <CustomButton onClick={handleCloseLoginPopup}>Close</CustomButton>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
