import React from "react";
import estilos from "../app/estilos.module.css";

const UserDetail = ({ user }) => {
  return (
    <div className={estilos.texto}>
      <p>{user.nombre}</p>
      <p>{user.apellido}</p>
      <p>{user.mail}</p>
    </div>
  );
};

export default UserDetail;
