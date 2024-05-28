import { Select, obtenerProductos } from './utilsdescription.js'
import { revisarSesion } from '../session.js'

const render = async () => {

    revisarSesion();
    
	const data = await obtenerProductos()
	const campo3 = document.querySelector('#campo3');
    
    const searchParams = new URLSearchParams(window.location.search);
    const productoID = searchParams.get('id');
            
    for (const llave in data) {
        const listaProductos = data[llave]

        for (const producto of listaProductos) {
            if (producto.id == productoID) {
                const select = new Select(
                    producto.id,
                    producto.img,
                    producto.name,
                    producto.price,
                    producto.description,
                    producto.favoritos,
                    producto.nodo
                )
                const productoRender = select.render()
        
                campo3.appendChild(productoRender)
            };
        };
    };
}

document.addEventListener('DOMContentLoaded', render)