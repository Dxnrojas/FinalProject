import {
  obtenerUsuarioEnSesion,
  actualizarUsuarioEnSesion,
} from "../session.js";

const render = async () => {
  const nombreUsuario = document.querySelector("#nombreUsuario");
  const usuario = obtenerUsuarioEnSesion();
  nombreUsuario.textContent = `Hola, ${usuario.name}`;

  const nombreUsuarioCargado = document.querySelector("#name");
  nombreUsuarioCargado.value = usuario.name;

  const apellidoUsuarioCargado = document.querySelector("#lastname");
  apellidoUsuarioCargado.value = usuario.apellido;

  const emailUsuarioCargado = document.querySelector("#email");
  emailUsuarioCargado.value = usuario.email;

  //  const passwordUsuarioCargado = document.querySelector("#password");
  //  passwordUsuarioCargado.value = usuario.password;

  const form = document.querySelector("#formulario");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    actualizarUsuarioEnSesion(password);
    alert("Contraseña actualizada correctamente");
  });
};

document.addEventListener("DOMContentLoaded", render);
