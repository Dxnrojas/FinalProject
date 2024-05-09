import { select } from './utilsdescription.js'

const render = async () => {
	const data = await obtenerProductos()
	const campo3 = document.querySelector('#campo3');
    const searchParams = new URLSearchParams(window.location.search);
        const productID = searchParams.get('id');

	for (const producto of data.panaderia) {
		const Panaderia = new panaderia(
			producto.id,
			producto.img,
			producto.name,
			producto.price,
			producto.nodo
		)
		const productoRender = Panaderia.render()

		campo3.appendChild(productoRender)
	}
}

document.addEventListener('DOMContentLoaded', render)