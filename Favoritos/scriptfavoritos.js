import { Favoritos } from './utilsfavoritos.js'
import { obtenerFavoritos, revisarSesion } from "../session.js";

//scriptfavoritos.js: Renderizar favoritos en la pagina
export const renderFavs = async () => {
	revisarSesion();
	const data = await obtenerFavoritos();
	const campo1 = document.querySelector("#campo1");
  
	for (const favorito of data) {
	  const favoritos = new Favoritos(
		favorito.id,
		favorito.img,
		favorito.name,
		favorito.price,
		favorito.nodo
	  );
	  const productoRender = favoritos.render();
  
	  campo1.appendChild(productoRender);
	}
  };

document.addEventListener('DOMContentLoaded', renderFavs)
