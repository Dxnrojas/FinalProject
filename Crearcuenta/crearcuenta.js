import { registrarUsuario } from "../session.js";

const render = async () => {
  const form = document.querySelector("#registro");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const apellido = e.target.apellido.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      registrarUsuario(name, apellido,email, password);
      window.location.href = "./crearcuenta.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);