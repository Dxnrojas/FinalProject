import { obtenerProductos } from "./Description-page/utilsdescription.js";

const USERS_KEY = "usuarios";
const ACTIVE_USER = "usuario";

export const iniciarSesion = (email, password) => {
  const usuarios = obtenerUsuarios();

  for (const usuario of usuarios) {
    if (usuario.email === email && usuario.password === password) {
      localStorage.setItem(ACTIVE_USER, usuario.id);
      return usuario;
    }
  }

  throw new Error("Nombre de usuario y/o contrasena incorrectos");
};

export const obtenerUsuarios = () => {
  const usersRaw = localStorage.getItem(USERS_KEY);

  if (usersRaw) {
    return JSON.parse(usersRaw);
  }

  return [];
};

export const registrarUsuario = (name, apellido, email, password) => {
  const usuarios = obtenerUsuarios();

  for (const usuario of usuarios) {
    if (usuario.email === email) {
      throw new Error("El email ya se encuentra registrado");
    }
  }

  if (email === "") {
    throw new Error("El email no puede estar vacio");
  }

  if (password.length < 6) {
    throw new Error("La contraseña debe tener al menos 6 caracteres");
  }

  if (name === "") {
    throw new Error("El nombre no puede estar vacio");
  }

  if (apellido === "") {
    throw new Error("El apellido no puede estar vacio");
  }

  usuarios.push({
    id: new Date().getTime(),
    name,
    apellido,
    email,
    password,
    favoritos: [],
  });

  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
};

export const obtenerUsuarioEnSesion = () => {
  const idUsuarioActivo = localStorage.getItem(ACTIVE_USER);

  if (!idUsuarioActivo) {
    return null;
  }

  const usuarios = obtenerUsuarios();

  for (const usuario of usuarios) {
    if (usuario.id === parseInt(idUsuarioActivo)) {
      return usuario;
    }
  }

  return null;
};

export const actualizarUsuarioEnSesion = (nuevaPassword) => {
  const usuarios = obtenerUsuarios();
  const usuarioActivo = obtenerUsuarioEnSesion();

  if (usuarioActivo) {
    usuarioActivo.password = nuevaPassword; //
    const usuario1 = usuarios.find((u) => u.id === usuarioActivo.id);
    usuario1.password = nuevaPassword; //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada.
    localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
  }
};

export const cerrarSesion = () => {
  localStorage.removeItem(ACTIVE_USER);
};

//Obtiene los favoritos del usuario en sesion
export const obtenerFavoritos = async () => {
  const user = obtenerUsuarioEnSesion();
  const favoritos = [];

  const data = await obtenerProductos();

  for (const llave in data) {
    const listaProductos = data[llave]; //obteniendo la lista de productos que le corresponde a esa llave

    //Recorrer la lista de productos buscando aquellos productos cuyo ID este en el arreglo de favoritos del usuario.
    for (const product of listaProductos) {
      if (user.favoritos.includes(product.id)) {
        favoritos.push(product);
      }
    }
  }

  return favoritos;
};

//Agrega favoritos al localStorage
export const agregarFavorito = (idProducto) => {
  const usuarios = obtenerUsuarios(); //Arreglo
  const usuario = usuarios.find(
    (usuario) => usuario.id === parseInt(localStorage.getItem(ACTIVE_USER)) //Cambiar por la funcion obtenerUsuario en sesion
  ); // Encuentrame el usuario que tenga el id del usuario activo.

  if (!usuario.favoritos.includes(idProducto)) {
    //usuario.favoritos estoy accediendo a la propiedad favoritos del objeto usuario.
    usuario.favoritos.push(idProducto);
  }

  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
};

//confirmar que el usuario esta en sesion
export const revisarSesion = () => {
  const usuario = obtenerUsuarioEnSesion();

  if (!usuario) {
    window.location.href = "../Pagina-1-san-camilo-COPIA1/index.html";
  }
};

//Elimina favoritos del localStorage
export const actualizarFavoritosLocalStorage = (favoritos) => {
  const usuarios = obtenerUsuarios(); //Busco el usuario
  const usuario = usuarios.find(
    (usuario) => usuario.id === parseInt(localStorage.getItem(ACTIVE_USER)));//Buscar el usuario que tiene la sesion activa
  usuario.favoritos = favoritos; //Actualizar lista de favoritos con los elementos eliminados

  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
};
