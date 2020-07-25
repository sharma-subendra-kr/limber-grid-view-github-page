import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./header.scss";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header-banner">
        <p>Limber.co.in</p>
        <p>LimberGridView 1.0.0-beta.0 is finally here!</p>
      </div>
      <a
        className="star-on-github"
        href="https://github.com/sharma-subendra-kr/LimberGridView"
        target="blank"
      >
        <span>Star on github!</span>
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </header>
  );
};

export default Header;
