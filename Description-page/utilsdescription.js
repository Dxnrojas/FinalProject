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
       const block = document.createElement('div');
       block.classList.add('block1');

       const innerblocks = document.createElement('div');
       innerblocks.classList.add('innerblocks1');
       innerblocks.id = "productoextra";
       block.appendChild(innerblocks);

       const imgBlockInnerblocks1 = document.createElement ('img');
       imgBlockInnerblocks1.src = this.img;
       imgBlockInnerblocks1.alt = this.name;
       innerblocks.appendChild(imgBlockInnerblocks1);
       
       const bottomblock = document.createElement('div');
       bottomblock.classList.add('bottomblock1');
       block.appendChild(bottomblock);

       const nombre = document.createElement('p');
       nombre.classList.add('letras1');
       nombre.textContent = this.name;
       bottomblock.appendChild(nombre);

       const description = document.createElement('p');
       description.textContent = this.description;
       description.id = "cuadrotexto";
       bottomblock.appendChild(description);

       const precio = document.createElement('p');
       precio.textContent = this.price;
       bottomblock.appendChild(precio);

       const add = document.createElement('div');
       add.classList.add('añadir');
       bottomblock.appendChild(add);

       const fav = document.createElement('p');
       fav.classList.add('añadir__text');
       fav.textContent = "Añadir a Favoritos";
       add.appendChild(fav);

       return block

    }
}

