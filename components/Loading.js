import React from "react";
import estilos from "../app/estilos.module.css";

const Loading = () => {
  return (
    <div className={estilos.contenedor}>
      <div className={estilos.texto}>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
