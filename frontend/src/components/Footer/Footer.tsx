import React from "react";
import { Button } from "../Button";
// import { SocialIcon } from 'react-social-icons';
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <Button to="/" className="footer__logo-link">
          Dream Catcher
        </Button>
        <p className="footer__watchword">dreams can come true...</p>
        <p className="footer__team-info">
          this site was created by a team of five people. 
          <br/>
          ©2023 All rights reserved
        </p>
      </div>
      <div className="footer__contact">
        {/* Buttons */}
        <p>
          <a href="mailto:info@dream_catcher.com">info@dream_catcher.com</a>
        </p>
        <p>Phone: +38 (095) 456 78 90</p>

        <div className="footer__social-links">
          <BsTelegram />
          <BsFacebook />
          <BsTwitter />
          {/* <SocialIcon url="https://facebook.com" bgColor="#1D1919" />
          <SocialIcon url="https://twitter.com" bgColor="#1D1919" />
          <SocialIcon url="https://telegram.com" bgColor="#1D1919" /> */}
        </div>
      </div>
      <div className="footer__navigation">
        <Button className="footer__navLink" to="/">
          Home
        </Button>
        <Button className="footer__navLink" to="/dreams">
          Dreams
        </Button>
        <Button className="footer__navLink" to="/login">
          Log in
        </Button>
        <Button className="footer__navLink" to="/registration">
          Registration
        </Button>
        <Button className="footer__navLink" to="/logout">
          Log out
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
