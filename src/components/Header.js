import React from "react";
import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Header.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="header">
      <div className="header-leftside">
        <img src={YakLogo} alt="Yak Logo" className="header-logo" />
        <h1 className="header-title">YakIO</h1>
      </div>
      <div className="header-rightside">
        <button
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="header-button"
        >
          X
        </button>
      </div>
      <div className={isMenuOpen ? "header-menu expanded" : "header-menu"}>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
