"use client";

import { createContext, useState, useEffect, useReducer } from "react";
import parseJwt from "../functions/parseJwt.js";
import isTokenValid from "../functions/isTokenValid.js";

const initialState = {
  tokenValid: false,
  user: null,
  jwt: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.jwt);
      const data = parseJwt(action.payload.jwt);
      if (isTokenValid(action.payload.jwt)) {
        localStorage.setItem("user", JSON.stringify(data));
        return {
          ...state,
          tokenValid: true,
          user: data,
          jwt: action.payload.jwt,
        };
      } else {
        return {
          ...state,
          tokenValid: false,
          user: data,
          jwt: action.payload.jwt,
        };
      }

    case "LOGOUT":
      localStorage.clear();
      return { ...state, tokenValid: false };
    default:
      return state;
  }
};

const LoggedContext = createContext();

export const LoggedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (typeof window != 'undefined') {
      const jwt = localStorage.getItem("token");
      if (jwt != 'null'){
        dispatch({ type: "LOGIN", payload: { jwt: jwt } });
      } 
    }
  }, []);

  return (
    <LoggedContext.Provider value={{ state, dispatch }}>
      {children}
    </LoggedContext.Provider>
  );
};

export default LoggedContext;
