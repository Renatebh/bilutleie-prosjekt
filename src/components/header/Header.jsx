import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/racing (2).png";
import headerStyles from "./Header.module.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={headerStyles.navbar}>
      <div className={headerStyles["logo-wrapper"]}>
        <img src={logo} alt="bildet av logoen" />
        <p className={headerStyles.logo}>Bilutleie</p>
      </div>

      <ul
        className={
          click
            ? headerStyles["nav-menu"] + " " + headerStyles.active
            : headerStyles["nav-menu"]
        }
      >
        <li>{/* <Link>Personbil</Link> */}</li>
        <li>Varebil</li>
        <li>Priser</li>
        <li>Kontakt oss</li>
      </ul>

      <div className={headerStyles["nav-icon"]} onClick={handleClick}>
        {click ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      <div className={headerStyles["contact-wrapper"]}>
        <FaPhoneAlt size={25} />

        <a href="tel:91774282" className={headerStyles.phone}>
          22 00 22 00
        </a>
      </div>
    </div>
  );
};

export default Header;
