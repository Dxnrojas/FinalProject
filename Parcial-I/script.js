import { obtenerProductos, panaderia, brunch, bebidasCaliente } from './utils.js'
import { revisarSesion } from '../session.js'

const render = async () => {
	
	revisarSesion();

	const data = await obtenerProductos()
	const campo1 = document.querySelector('#campo1')

	for (const producto of data.panaderia) {
		const Panaderia = new panaderia(
			producto.id,
			producto.img,
			producto.name,
			producto.price,
			producto.nodo
		)
		const productoRender = Panaderia.render()

		campo1.appendChild(productoRender)
	}

	const campo2 = document.querySelector('#campo2')

	for (const producto of data.brunch) {
		const miBrunch = new brunch(
			producto.id,
			producto.img,
			producto.name,
			producto.price,
			producto.nodo
		)
		const productoRender = miBrunch.render()

		campo2.appendChild(productoRender)
	}

	const campo3 = document.querySelector('#campo3')

	for (const producto of data.bebidasCaliente) {
		const bebidasCalientes = new bebidasCaliente(
			producto.id,
			producto.img,
			producto.name,
			producto.price,
			producto.nodo
		)
		const productoRender = bebidasCalientes.render()

		campo3.appendChild(productoRender)
	};
}

document.addEventListener('DOMContentLoaded', render)
