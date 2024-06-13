"use client";

import React from "react";
import estilos from "../estilos.module.css";
import { useFetch } from "../functions/useFetch.js";
import UserDetail from "../components/UserDetail.js";
import NavBar from "../components/NavBar.js";


export default function Page({params}) {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  )
  const user = data.filter(((data) => data.user == params.user))



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
        {user?.map((u) => (
          <UserDetail user={u} key={u.mail} />
        ))}
      </div>
    </main>
  );
}