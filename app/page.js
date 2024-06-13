"use client";

import React from "react";
import estilos from "./estilos.module.css";
import { useFetch } from "./functions/useFetch.js";

export default function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  );
  const users = data;

  return (
    <main className={estilos.main}>
      <div className={estilos.nav}>
        <h1>Index</h1>
      </div>

      <div className={estilos.contenedor}>
        {error && (
          <div className={estilos.texto}>
            <p>Error...</p>
          </div>
        )}
        {loading && (
          <div className={estilos.texto}>
            <p>Loading...</p>
          </div>
        )}
        {data?.map((u) => (
          <div key={u.mail} className={estilos.texto}>
            <p>{u.nombre}</p>
            <p>{u.apellido}</p>
            <p>{u.mail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}