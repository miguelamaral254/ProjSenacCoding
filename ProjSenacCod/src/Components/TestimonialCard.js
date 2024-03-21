import React from "react";
import { AiFillStar } from "react-icons/ai";

const TestimonialCard = ({  comment, rating, name }) => {
  return (
      <div className="testimonial-card">
        <p className="testimonial-comment">{comment}</p>
        <div className="testimonial-rating">
          {[...Array(rating)].map((_, index) => (
            <AiFillStar key={index} />
          ))}
        </div>
        <h2 className="testimonial-name">{name}</h2>
      </div>
  );
};

export default TestimonialCard;
