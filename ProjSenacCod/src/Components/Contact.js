import React from "react";

const Contact = () => {
  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">
        Tem alguma dúvida <br /> de como funciona?
      </h1>
      <h2>Nos deixe saber!</h2>
      <div className="contact-form-container">
        <input type="text" placeholder="seuemail@gmail.com" />
        <button className="secondary-button">Enviar</button>
      </div>
    </div>
  );
};

export default Contact;
