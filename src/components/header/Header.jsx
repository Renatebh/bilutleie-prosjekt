import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/racing (2).png";
import "./Header.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="bildet av logoen" />
        <p className="logo">Bilutleie</p>
      </div>

      <ul className={click ? " nav-menu active" : "nav-menu"}>
        <li>Personbil</li>
        <li>Varebil</li>
        <li>Priser</li>
        <li>Kontakt oss</li>
      </ul>

      <div className="nav-icon" onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      <div className="contact-wrapper">
        <FaPhoneAlt size={25} />

        <a href="tel:91774282" className="phone">
          22 00 22 00
        </a>
      </div>
    </div>
  );
};

export default Header;
