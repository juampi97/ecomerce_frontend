"use client";

import React from "react";
import estilos from "./estilos.module.css";
import NavBar from "./components/NavBar";
import parseJwt from "./functions/parseJwt";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

export default function Home() {
  const [token, setToken] = useState(null);
  const [tokenValid, setTokenValid] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("token");
      setToken(data);
    }
  }, []);

  useEffect(() => {
    if (token) {
      if (parseJwt(token).exp * 1000 > Date.now()) {
        setTokenValid(true);
        setUser(parseJwt(token));
      } else {
        setTokenValid(false);
        setUser(null);
      }
    }
  }, [token]);

  console.log(token);
  console.log(tokenValid);
  console.log(user);

  return (
    <main className={estilos.main}>
      <NavBar />
        <div className={estilos.contenedor}>
          {tokenValid ? (
            <div className={estilos.texto}>
              <p>{user.nombre}</p>
              <p>{user.apellido}</p>
              <p>{user.email}</p>
              <p>{user.user}</p>
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
