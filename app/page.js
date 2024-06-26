"use client";

import React from "react";
import estilos from "./estilos.module.css";
import { useFetch } from "./functions/useFetch.js";
import UserCard from "./components/UserCard";

export default function Home() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  );
  const users = data;

  return (
    <main className={estilos.main}>
      <div className={estilos.nav}>
        <h1>Index</h1>
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Login
        </a>
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
          <UserCard user={u} key={u.mail} />
        ))}
      </div>
    </main>
  );
}
