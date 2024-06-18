import React from "react";
import estilos from "../app/estilos.module.css";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import LoggedContext from "@/context/loggedContext";

const NavBar = () => {
  const { state, dispatch } = useContext(LoggedContext);
  console.log(state);
  
  const router = useRouter();

  const handleClickIndex = () => {
    router.push(`/`);
  };

  const handleClickLogin = () => {
    router.push(`/login`);
  };

  const handleClickLogout = () => {
    dispatch({ type: "LOGOUT", payload: null });
    router.refresh()
  };

  return (
    <>
      <div className={estilos.nav}>
        <h1 style={{ cursor: "pointer" }} onClick={handleClickIndex}>
          Index
        </h1>
        {!state.tokenValid && <button
          onClick={handleClickLogin}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Login
        </button>}
        {state.tokenValid && <button
          onClick={handleClickLogout}
          className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Logout
        </button>}
      </div>
    </>
  );
};

export default NavBar;
