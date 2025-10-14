import React from "react";
import "./Error_404.css";
import errorImage from "../../assets/error_404.png"; 

function Error404({ mensaje = "No se encontró información." }) {
  return (
    <div className="error404-container">
      <img src={errorImage} alt="Error 404" className="error404-img" />
      <h2>{mensaje}</h2>
    </div>
  );
}

export default Error404;
