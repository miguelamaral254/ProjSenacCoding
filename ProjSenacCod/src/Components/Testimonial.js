import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      comment: "Pedido Show! Toda vez que vou pro senac eu peço!",
      rating: 5,
      name: "Luiza Mel",
    },
    {
      comment: "Pedido chegou quentinho e no horário combinado!",
      rating: 4,
      name: "Danilo QuaseMel",
    },
    {
      comment: "Muito top!!!",
      rating: 4,
      name: "Lujan talvezMel",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="primary-heading">Nossos clientes:</h1>
        <p className="primary-text">
            Nosso maior prazer é fazer parte do dia de nossos clientes e levar uma experiência gastrônomica sem igual! 
        </p>
      </div>
      <div className="testimonial-section-bottom">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
