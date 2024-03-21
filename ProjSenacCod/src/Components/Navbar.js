import React, { useState } from "react";
import logo from "../Assets/Senac_logo.svg.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";

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
        <a href="" onClick={() => scrollToSection("home")}>
          Home
        </a>
        <a href="#" onClick={() => scrollToSection("about")}>
          Sobre
        </a>
        <a href="#" onClick={() => scrollToSection("work")}>
          Como funciona?
        </a>
       
        <a href="#" onClick={() => scrollToSection("contact")}>
          Contatos
        </a>
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
