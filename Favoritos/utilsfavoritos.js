import { obtenerFavoritos } from "../session.js";

export class Favoritos {
    #id
	img
	name
    price
    #nodo

    constructor (id, img, name, price){
        this.#id = id
        this.img = img
        this.name = name
        this.price = price
    }

    render() {
		const block = document.createElement('div')
		block.classList.add('block')

		const block__innerblocks = document.createElement('div')
		block__innerblocks.classList.add('block__innerblocks')
		block.appendChild(block__innerblocks)

		const imgBlockInnerblocks = document.createElement('img')
		imgBlockInnerblocks.src = this.img
		imgBlockInnerblocks.alt = this.name
		imgBlockInnerblocks.classList.add('block__innerblocks')
		block__innerblocks.appendChild(imgBlockInnerblocks)

		const bottomblock = document.createElement('div')
		bottomblock.classList.add('block__bottomblock')

		const title = document.createElement('p')
		title.classList.add('block__bottomblock--letras')
		title.textContent = this.name
		bottomblock.appendChild(title)

		const button = document.createElement('button')
		button.textContent = 'More'
		button.classList.add('more')
		bottomblock.appendChild(button)

		block.appendChild(bottomblock)

		button.addEventListener('click', () => {
		window.location.href = '../Description-page/description.html?id=' + this.#id
	 })
		return block
	}
	

}


