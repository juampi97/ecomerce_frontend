"use client";

import React from "react";
import estilos from "./estilos.module.css";
import { useFetch } from "./functions/useFetch.js";
import UserCard from "./components/UserCard";
import NavBar from "./components/NavBar";

export default function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  );
  const users = data;

  return (
    <main className={estilos.main}>
      <NavBar/>

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
          <UserCard user={u} key={u.mail} />
        ))}
      </div>
    </main>
  );
}
