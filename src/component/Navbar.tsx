// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${
        isScrolled ? "navbar-scrolled" : "navbar-default"
      } sticky-top`}
    >
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/img/bkkydc-navlogo.png"
            alt="Logo"
            width="100%"
            height="60"
          />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                หน้าหลัก
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                เกี่ยวกับ พยก.
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/info" className="nav-link">
                ข่าวสาร
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                ติดต่อเรา
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          <a
            className="nav-link mx-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/bkkydc/"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            className="nav-link mx-2"
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/BKKYDC"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a className="nav-link mx-2" target="_blank" href="/">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
