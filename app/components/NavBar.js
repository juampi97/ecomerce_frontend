import React from "react";
import estilos from "../estilos.module.css"
import { useRouter  } from "next/navigation";

const NavBar = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/`)
  }

  return (
    <>
      <div className={estilos.nav}>
        <h1 style={{cursor: 'pointer'}} onClick={handleClick}>Index</h1>
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Login
        </a>
      </div>
    </>
  );
};

export default NavBar;
