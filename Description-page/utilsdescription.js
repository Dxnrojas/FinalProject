export const obtenerProductos = async () => {
	const response = await fetch('https://raw.githubusercontent.com/Dxnrojas/FinalProject/main/Parcial-I/data.json')
	const data = await response.json()
	return data
}

export class select {
    #id
    img
    name
    price
    description
	#nodo

    constructor(id, img, name, price, description) {
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
        this.description = description
        //this.#nodo = nodo;
    }
}

