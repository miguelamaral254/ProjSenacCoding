import React from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import logo from "../Assets/Senac_logo.svg.png";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={logo} alt="" />
        </div>
        <div>
          <p>
            A instituição de educação profissional aberta a toda a sociedade, com a
            missão de desenvolver pessoas e organizações para o mundo do
            trabalho. O Serviço Nacional de Aprendizagem Comercial – Senac,
            pessoa jurídica de direito privado, sem fins lucrativos, foi criado
            pelo Decreto-lei nº 8.621 de 10 de janeiro de 1946. Neste mesmo ano,
            foi fundado também seu Departamento Regional de Pernambuco,
            instalado em 14 de outubro.
          </p>
        </div>
        <div className="footer-icons">
          <a
            href="https://twitter.com/SenacBrasil?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            target="_blank"
          >
            <BsTwitter />
          </a>
          <a
            href="https://www.linkedin.com/school/centrouniversitariosenac/"
            target="_blank"
          >
            <SiLinkedin />
          </a>
          <a href="https://www.youtube.com/@senacbrasil" target="_blank">
            <BsYoutube />
          </a>
          <a href="https://www.instagram.com/senacpe/" target="_blank">
            <BsInstagram />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Parceiros:</span>
          <span>Fecomércio Pernambuco</span>
          <span>Sesc Pernambuco</span>
          <span>Santander</span>
          <span>Senac delivered</span>
        </div>
        <div className="footer-section-columns">
          <span>3413-6666</span>
          <span>senac@pe.senac.br</span>
          <span>facebook.com/senacpe</span>
          <span>twitter.com/senacpe</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
