import React, { useState } from "react";
import logo from "../Assets/Senac_logo.svg.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpenMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src={logo} alt="" width="90px" height="90px" />
      </div>
      <div className="navbar-links-container">
        <Link onClick={() => scrollToSection("home")}>
          <p className="nav-btn">Home</p>
        </Link>
        <Link onClick={() => scrollToSection("about")}>
          <p className="nav-btn">Sobre</p>
        </Link>
        <Link onClick={() => scrollToSection("work")}>
          <p className="nav-btn">Como funciona?</p>
        </Link>
        <Link onClick={() => scrollToSection("contact")}>
          <p className="nav-btn">Contatos</p>
        </Link>

        <a href="#">
          <BsCart2 className="navbar-cart-icon" />
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
    </nav>
  );
};

export default Navbar;
