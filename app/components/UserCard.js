import React from "react";
import estilos from "../estilos.module.css";
import { useRouter  } from "next/navigation";


const UserCard = ({ user }) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/${user.user}`)
  }

  return (
    <div className={estilos.texto}>
      <p>{user.nombre}</p>
      <p>{user.apellido}</p>
      <p>{user.mail}</p>
      <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-10 py-3 m-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          onClick={handleClick}
        >
          Ver perfil
        </a>
    </div>
  );
};

export default UserCard;
