import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Não perca tempo cozinhando",
      text: "Passo inicial para pedir um delivery.",
    },
    {
      image: ChooseMeals,
      title: "Monte sua salada",
      text: "Selecione nossos deliciosos ingredientes e monte uma salada deliciosa do tamanho da sua fome",
    },
    {
      image: DeliveryMeals,
      title: "Espere nosso entregador",
      text: "Apenas os entregadores da amazon conseguem superar a velocidade de nossas entregas.",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work">
      <div className="work-section-top">
        <h1 className="primary-heading">Como pedir no</h1>
        <h1 className="primary-heading"> Senac Salad?</h1>
        <p className="primary-text">
          Trabalhamos com a política dos 3S: <br/>
          Super fácil - Super prático - Super delicioso
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
