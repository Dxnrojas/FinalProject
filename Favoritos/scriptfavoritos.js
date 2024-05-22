import { Favoritos } from './utilsfavoritos.js'
import { obtenerFavoritos } from "../session.js";

const renderFavs = async () => {
	const data = await obtenerFavoritos()
	const campo1 = document.querySelector('#campo1')

	for (const favorito of data) {
		const favoritos = new Favoritos(
			favorito.id,
			favorito.img,
			favorito.name,
            favorito.price,
			favorito.nodo
		)
		const productoRender = favoritos.render()

		campo1.appendChild(productoRender)
	};
}

document.addEventListener('DOMContentLoaded', renderFavs)
