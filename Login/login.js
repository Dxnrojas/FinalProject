import { iniciarSesion } from "../session.js";

const render = async () => {
  const form = document.querySelector("#login");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      iniciarSesion(email, password);
      window.location.href = "../Parcial-I/main.html";
    } catch (error) {
      alert(error.message);
    }
  });
};

document.addEventListener("DOMContentLoaded", render);