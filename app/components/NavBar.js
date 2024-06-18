import React from "react";
import estilos from "../estilos.module.css";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();

  const handleClickIndex = () => {
    router.push(`/`);
  };

  const handleClickLogin = () => {
    router.push(`/login`);
  };

  return (
    <>
      <div className={estilos.nav}>
        <h1 style={{ cursor: "pointer" }} onClick={handleClickIndex}>
          Index
        </h1>
        <button
          onClick={handleClickLogin}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default NavBar;
