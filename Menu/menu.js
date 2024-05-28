import { cerrarSesion, revisarSesion } from "../session.js";

const render = async () => {
  revisarSesion();
  const button = document.querySelector("#button");

  button.addEventListener("click", (e) => {
    e.preventDefault();

    cerrarSesion();

    window.location.href = "../Pagina-1-san-camilo-COPIA1/index.html";
  });
};

document.addEventListener("DOMContentLoaded", render);
