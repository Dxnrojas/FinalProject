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