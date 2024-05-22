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
    for(const product of listaProductos){
      if (user.favoritos.includes(product.id)) {
        favoritos.push(product);
      };
    }
  }


  return favoritos;
};

//Agrega favoritos al localStorage
export const agregarFavorito = (idProducto) => {
  const usuarios = obtenerUsuarios(); //Arreglo
  const usuario = usuarios.find(
    (usuario) => usuario.id === parseInt(localStorage.getItem(ACTIVE_USER))
  ); // Encuentrame el usuario que tenga el id del usuario activo.

  if (usuario.favoritos.includes(idProducto)) {
    //usuario.favoritos estoy accediendo a la propiedad favoritos del objeto usuario.
    throw new Error("El producto ya se encuentra en favoritos");
  }
  usuario.favoritos.push(idProducto);

  localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
};

console.log(2*2)
