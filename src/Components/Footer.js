import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import "./Menu.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a href="https://github.com/peskaypea" className="icon brands alt">
              <FontAwesomeIcon icon={faGithub} />
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/zanereid/"
              className="icon brands alt"
            >
              <FontAwesomeIcon icon={faLinkedin} />
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@zorescode"
              className="icon brands alt"
            >
              <FontAwesomeIcon icon={faYoutube} />
              <span className="label">Youtube</span>
            </a>
          </li>
        </ul>
        <ul className="copyright">
          <li>&copy; Zane</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
