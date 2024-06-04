import { renderFavs } from "./scriptfavoritos.js";
import {
  actualizarFavoritosLocalStorage,
  obtenerUsuarioEnSesion,
} from "../session.js";

export class Favoritos {
  #id;
  img;
  name;
  price;
  #nodo;

  constructor(id, img, name, price) {
    this.#id = id;
    this.img = img;
    this.name = name;
    this.price = price;
  }

  render() {
    const block = document.createElement("div");
    block.classList.add("block");

    const block__innerblocks = document.createElement("div");
    block__innerblocks.classList.add("block__innerblocks");
    block.appendChild(block__innerblocks);

    const imgBlockInnerblocks = document.createElement("img");
    imgBlockInnerblocks.src = this.img;
    imgBlockInnerblocks.alt = this.name;
    imgBlockInnerblocks.classList.add("block__innerblocks");
    block__innerblocks.appendChild(imgBlockInnerblocks);

    const bottomblock = document.createElement("div");
    bottomblock.classList.add("block__bottomblock");

    const title = document.createElement("p");
    title.classList.add("block__bottomblock--letras");
    title.textContent = this.name;
    bottomblock.appendChild(title);

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.classList.add("more");
    bottomblock.appendChild(button);

    block.appendChild(bottomblock);

    //utilsfavortios.js: Eliminar favoritos del localStorage
    button.addEventListener("click", () => {
      const favoritos = obtenerUsuarioEnSesion().favoritos;

      const indice = favoritos.findIndex((favorito) => favorito === this.#id); //buscar el indice del favorito que se quiere eliminar

      favoritos.splice(indice, 1);

      actualizarFavoritosLocalStorage(favoritos);
      document.getElementById("campo1").innerHTML = ""; //vaciar el div donde se renderizan los favoritos para renderizar con los favoritos actualizados
      renderFavs();
    });
    return block;
  }
}
