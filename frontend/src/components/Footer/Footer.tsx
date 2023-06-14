import React from "react";
import "./Footer.scss";
import { Button } from "../Button";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__about">
        <Button
          to="/"
          className="footer__logo-link"
        >
          Dream Catcher
        </Button>

        <p className="footer__watchword">dreams can come true</p>
        <p className="footer__team-info">this site was created by a team of five people. © 2023 All rights reserved</p>
      </div>
      <p><a href="mailto:hege@example.com">hege@example.com</a></p>
    </footer>
  );
};

export default Footer;