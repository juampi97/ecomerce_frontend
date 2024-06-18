import parseJwt from "./parseJwt.js";

const isTokenValid = (jwt) => {
  if(jwt) {
    const token = parseJwt(jwt)
    if (Date.now() >= token.exp * 1000) {
      return false;
    }
    return true;
  } else {
    return false
  }
};

export default isTokenValid;
