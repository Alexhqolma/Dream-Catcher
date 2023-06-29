import React, { useEffect } from 'react';
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';
import { CustomButton, Target } from "../UI/CustomButton";
import { routes } from "../../routes/routerConfig";
import { useAppSelector } from "../../store/hooks";
import { selectUser } from "../../store/features/user/userSlice";

import "./Footer.scss";

const Footer: React.FC = () => {
  const { home, dreams, login, registration, user, favorites } = routes;
  const isAuth = Boolean(useAppSelector(selectUser));
  const userId = useAppSelector(selectUser)?.userId;

  useEffect(() => {
    // console.log('render footer');
  }, [isAuth]);

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
    </footer>
  );
};

export default Footer;
