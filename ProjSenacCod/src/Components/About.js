import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

const About = () => {
  return (
    <div className="about-section-container" id="about">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          O almoço é uma das partes mais importante <br /> do seu dia.
        </h1>
        <span className="primary-text">E a Senac Salad sabe disso.</span>
        <p className="primary-text">
          Nossa equipe conta com profissionais qualificados e que se importam
          com cada ingrediente.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            <a href="https://www.youtube.com/watch?v=1P5yyeeYF9o">
              Conheça nosso cardápio
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
