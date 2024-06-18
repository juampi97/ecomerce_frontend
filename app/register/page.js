"use client";

import React from "react";
import estilos from "../estilos.module.css";
import { useFetch } from "../../functions/useFetch.js";
import NavBar from "../../components/NavBar.js";
import FormRegister from "../../components/FormRegister.js";


export default function Page() {
  const { data, loading, error } = useFetch(
    "http://localhost:5000/api/usuarios"
  )

  return (
    <main className={estilos.main}>
      <NavBar/>

      <div className={estilos.contenedor}>
        <FormRegister />
      </div>
    </main>
  );
}