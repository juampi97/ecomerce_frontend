"use client";

import React from "react";
import estilos from "../estilos.module.css";
import { useFetch } from "../functions/useFetch.js";
import UserCard from "../components/UserCard";
import NavBar from "../components/NavBar";


export default function Users() {
  const BASE_URL_BACKEND = process.env.NEXT_PUBLIC_BASE_URL_BACKEND
  
  const { data, loading, error } = useFetch(
  `${BASE_URL_BACKEND}/api/usuarios`
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
          <UserCard user={u} key={u.email} />
        ))}
      </div>
    </main>
  );
}
