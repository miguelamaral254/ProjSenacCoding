import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Twisted Salad
          </h1>
          <h2>
            Quentinho e fresquinho para todos os momentos do dia-dia
          </h2>
          <p className="primary-text">
            O prato mais pedido da casa. O twisted salad é preparado com os
            ingredientes mais frescos selecionados à dedo. Prove e nunca mais
            irá querer outra coisa.
          </p>
          <button className="secondary-button">
            <a
              href="https://www.youtube.com/watch?v=1P5yyeeYF9o"
              target="_blank"
            >
              Pedir agora
            </a>
            <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
