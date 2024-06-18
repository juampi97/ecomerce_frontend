import React from "react";
import estilos from "../estilos.module.css";

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
