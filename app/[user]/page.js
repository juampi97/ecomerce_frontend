"use client";

import React from "react";
import estilos from "../estilos.module.css";
import { useFetch } from "../functions/useFetch.js";
import UserDetail from "../components/UserDetail.js";

export default function Page({params}) {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  )
  const user = data.filter(((data) => data.user == params.user))



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
        {user?.map((u) => (
          <UserDetail user={u} key={u.mail} />
        ))}
      </div>
    </main>
  );
}