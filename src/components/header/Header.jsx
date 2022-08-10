import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/racing (2).png";
import headerStyles from "./Header.module.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className={headerStyles.navbar}>
      <header className={headerStyles["header-container"]}>
        <div className={headerStyles["logo-wrapper"]}>
          <a className={headerStyles["logo-link"]} href="/">
            <img src={logo} alt="bildet av logoen" />
            <p className={headerStyles.logo}>Bilutleie</p>
          </a>
        </div>

        <nav>
          <ul
            className={
              click
                ? `${headerStyles["nav-menu"]} ${headerStyles.active}`
                : headerStyles["nav-menu"]
            }
          >
            <li>
              <Link
                onClick={handleClick}
                className={headerStyles["router-links"]}
                to="/cars"
              >
                Personbil
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className={headerStyles["router-links"]}
                to="/trucks"
              >
                Varebil
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className={headerStyles["router-links"]}
                to="/prices"
              >
                Priser
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className={headerStyles["router-links"]}
                to="/contact"
              >
                Kontakt oss
              </Link>
            </li>
            <li>
              <Link
                onClick={handleClick}
                className={headerStyles["router-links"]}
                to="/about-car"
              >
                Om bil
              </Link>
            </li>
          </ul>
        </nav>

        <div className={headerStyles["nav-icon"]} onClick={handleClick}>
          {click ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        <div className={headerStyles["contact-wrapper"]}>
          <FaPhoneAlt size={25} />

          <a href="tel:91774282" className={headerStyles.phone}>
            22 00 22 00
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
