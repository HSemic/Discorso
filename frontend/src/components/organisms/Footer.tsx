import React from "react";

import { ReactComponent as IconLinkedin } from "../../assets/images/svg/linkedin.svg";
import { ReactComponent as IconGithub } from "../../assets/images/svg/github.svg";
import ExternalLinkIcon from "../atoms/ExternalLinkIcon";

const Footer = (): React.ReactElement => {
  return (
    <footer className="footer">
      <div className="row u-flex-end u-margin-top-sm u-margin-bottom-xs">
        <div className="col-1-of-3"></div>
      </div>
      <div className="row u-space-between u-margin-top-sm u-margin-bottom-xs">
        <div className="col-1-of-3">
          <div className="paragraph">Haris Šemić &copy; 2021</div>
        </div>
        <div className="col-1-of-3">
          <div className="footer-icons">
            <ExternalLinkIcon
              url="https://www.linkedin.com/in/harissemic/"
              name="LinkedIn"
            >
              <IconLinkedin />
            </ExternalLinkIcon>
            <ExternalLinkIcon
              url="https://github.com/HSemic/Discorso"
              name="GitHub"
            >
              <IconGithub />
            </ExternalLinkIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
