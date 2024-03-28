import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const [email, setEmail] = useState("");

  const sweetSuccess = () => {
    Swal.fire({
      title: "Enviado!!",
      text: "Clique aqui para voltar!",
      icon: "success",
      confirmButtonClass: "confirmClass",
      customClass: {
        title: "titleClass",
      },
    });
    setEmail("");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Verifica se o email é vai ser válido
  const isEmailValid = () => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="contact-page-wrapper" id="contact">
      <h1 className="primary-heading">
        Tem alguma dúvida <br /> de como funciona?
      </h1>
      <h2>Nos deixe saber!</h2>
      <div className="contact-form-container">
        <input
          type="text"
          placeholder="seuemail@gmail.com"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          className="secondary-button"
          onClick={sweetSuccess}
          disabled={!isEmailValid()}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Contact;
