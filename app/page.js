"use client";

import React from "react";
import estilos from "./estilos.module.css";
import NavBar from "../components/NavBar.js";
import NavBarLogout from "../components/NavBarLogout.js";
import { useEffect, useState, useContext } from "react";
import LoggedContext from "../context/loggedContext.js";

export default function Home() {

  const { state, dispatch } = useContext(LoggedContext);
  
  return (
    <main className={estilos.main}>
      {state.tokenValid ? <NavBarLogout /> : <NavBar />}
      <div className={estilos.contenedor}>
        {state.tokenValid ? (
          <div className={estilos.texto}>
            <p>{state.user.nombre}</p>
            <p>{state.user.apellido}</p>
            <p>{state.user.email}</p>
            <p>{state.user.user}</p>
          </div>
        ) : (
          <div className={estilos.texto}>
            <p>Usuario no logeado</p>
          </div>
        )}
      </div>
    </main>
  );
}
