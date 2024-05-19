const USERS_KEY = "usuarios";
const ACTIVE_USER = "usuario";
const FAVORITOS_KEY = "favoritos";

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

export const obtenerFavoritos = () => {
  const favoritos = localStorage.getItem(FAVORITOS_KEY);

  if (favoritos) {
    return JSON.parse(favoritos);
  }

  return {};
};

export const agregarFavorito = (idProducto) => {
  const usuario = obtenerUsuarioEnSesion();
  const favoritos = obtenerFavoritos();

  if(usuario.id in favoritos){ // Si el usuario ya tiene favoritos
    if(favoritos[usuario.id].includes(idProducto)){
      throw new Error("El producto ya se encuentra en favoritos");
    }
    favoritos[usuario.id].push(idProducto);
  }else{
    favoritos[usuario.id] = [idProducto]; // Crear un array con el id del producto
  };

  localStorage.setItem(FAVORITOS_KEY, JSON.stringify(favoritos));
  
};
