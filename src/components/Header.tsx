import Home from "../components/Home";
import Register from "../components/Register";
import Login from "./Login";
import Video from "./Video";
import Profile from "./Profile";
import Forget from "./Forget";
import YakLogo from "../assets/yaklogosemfundo.png";
import "../styles/Header.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <nav className="header">
        <div className="header-leftside">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className="header-button-left"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className="header-center">
          <img src={YakLogo} alt="Yak Logo" className="header-logo" />
          <h1 className="header-title">YakIO</h1>
        </div>

        <div className={isMenuOpen ? "header-menu expanded" : "header-menu"}>
          <ul>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/register">Register</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/login">Log in</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/about">About us</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/contact">Contact</Link>
            </li>
            <li onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Link to="/terms">Service Terms</Link>
            </li>
          </ul>
        </div>

        <div className="header-rightside">
          <button className="header-button-right">
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/video" element={<Video />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forget" element={<Forget />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Header;
