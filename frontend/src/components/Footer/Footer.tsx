import React from "react";
import { Button } from "../Button";
import { BsTelegram, BsFacebook, BsTwitter } from 'react-icons/bs';

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <div>
          <Button to="/" className="footer__logo-link">
            Dream Catcher
          </Button>
          <p className="footer__watchword">dreams can come true...</p>
        </div>

        <p className="footer__team-info">
          this site was created by a team of five people. 
          <br/>
          ©2023 All rights reserved
        </p>
      </div>

      <div className="footer__contact">
        <Button href="mailto:info@dream_catcher.com">
          info@dream_catcher.com
        </Button>

        <Button href="tel:+38095-456-78-90">
          +38 (095) 456 78 90
        </Button>

        <div className="footer__social-links">
          <Button
            href="https://web.telegram.org"
            target="blank"
          >
            <BsTelegram size={30} />
          </Button>

          <Button
            href="https://facebook.com"
            target="blank"
          >
            <BsFacebook size={30} />
          </Button>

          <Button
            href="https://twitter.com"
            target="blank"
          >
            <BsTwitter size={30} />
          </Button>
        </div>
      </div>

      <div className="footer__navigation">
        <div>
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
      </div>
    </footer>
  );
};

export default Footer;
