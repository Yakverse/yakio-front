import React from "react";
import Home from "../components/Home";
import Register from "../components/Register";
import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Header.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
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
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={isMenuOpen ? "header-menu expanded" : "header-menu"}>
          <ul>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/register">Register</Link>
            </li>
            {/* <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
