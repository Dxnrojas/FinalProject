export const obtenerProductos = async () => {
	const response = await fetch('https://raw.githubusercontent.com/Dxnrojas/FinalProject/main/Parcial-I/data.json')
	const data = await response.json()
	return data
}

export class Select {
    #id
    img
    name
    price
    description
    favoritos
	#nodo

    constructor(id, img, name, price, description, favoritos) {
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
        this.description = description
        this.favoritos = favoritos
        //this.#nodo = nodo;
    }

    render(){
       const block1 = document.createElement('div');
       block1.classList.add('block1');

    }
}

