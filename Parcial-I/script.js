import {
  obtenerProductos,
  panaderia,
  brunch,
  bebidasCaliente,
} from "./utils.js";
import { revisarSesion } from "../session.js";

const renderProductos = async (busqueda) => {
  revisarSesion();

  const textoLimpio = busqueda.toLowerCase();
  console.log(textoLimpio);

  const data = await obtenerProductos();
  const campo1 = document.querySelector("#campo1");
  campo1.innerHTML = "";	

  for (const producto of data.panaderia) {
    const Panaderia = new panaderia(
      producto.id,
      producto.img,
      producto.name,
      producto.price,
      producto.nodo
    );
    const productoRender = Panaderia.render();

    if (
      textoLimpio === "" ||
      producto.name.toLowerCase().includes(textoLimpio)
    ) {
      campo1.appendChild(productoRender);
    }
  }

  const campo2 = document.querySelector("#campo2");
  campo2.innerHTML = "";	

  for (const producto of data.brunch) {
    const miBrunch = new brunch(
      producto.id,
      producto.img,
      producto.name,
      producto.price,
      producto.nodo
    );
    const productoRender = miBrunch.render();

    if (
      textoLimpio === "" ||
      producto.name.toLowerCase().includes(textoLimpio)
    ) {
      campo2.appendChild(productoRender);
    }
  }

  const campo3 = document.querySelector("#campo3");
  campo3.innerHTML = "";

  for (const producto of data.bebidasCaliente) {
    const bebidasCalientes = new bebidasCaliente(
      producto.id,
      producto.img,
      producto.name,
      producto.price,
      producto.nodo
    );
    const productoRender = bebidasCalientes.render();

    if (
      textoLimpio === "" ||
      producto.name.toLowerCase().includes(textoLimpio)
    ) {
      campo3.appendChild(productoRender);
    }
  }
};

const render = async () => {
   await renderProductos("");

  const barraBusqueda = document.querySelector("#buscador");
  barraBusqueda.addEventListener("input", async (event) => {
    const busqueda = event.target.value;
    await renderProductos(busqueda);
  });
};

document.addEventListener("DOMContentLoaded", render);

// import {
// 	obtenerProductos,
// 	panaderia,
// 	brunch,
// 	bebidasCaliente,
//   } from "./utils.js";
//   import { revisarSesion } from "../session.js";

//   const render = async (busqueda = "") => {
// 	revisarSesion();

// 	const textoLimpio = busqueda.toLowerCase();
// 	console.log(textoLimpio);

// 	const data = await obtenerProductos();
// 	const campo1 = document.querySelector("#campo1");
// 	const campo2 = document.querySelector("#campo2");
// 	const campo3 = document.querySelector("#campo3");

// 	campo1.innerHTML = "";
// 	campo2.innerHTML = "";
// 	campo3.innerHTML = "";

// 	for (const producto of data.panaderia) {
// 	  if (producto.name.toLowerCase().includes(textoLimpio)) {
// 		const Panaderia = new panaderia(
// 		  producto.id,
// 		  producto.img,
// 		  producto.name,
// 		  producto.price,
// 		  producto.nodo
// 		);
// 		const productoRender = Panaderia.render();
// 		campo1.appendChild(productoRender);
// 	  }
// 	}

// 	for (const producto of data.brunch) {
// 	  if (producto.name.toLowerCase().includes(textoLimpio)) {
// 		const miBrunch = new brunch(
// 		  producto.id,
// 		  producto.img,
// 		  producto.name,
// 		  producto.price,
// 		  producto.nodo
// 		);
// 		const productoRender = miBrunch.render();
// 		campo2.appendChild(productoRender);
// 	  }
// 	}

// 	for (const producto of data.bebidasCaliente) {
// 	  if (producto.name.toLowerCase().includes(textoLimpio)) {
// 		const bebidasCalientes = new bebidasCaliente(
// 		  producto.id,
// 		  producto.img,
// 		  producto.name,
// 		  producto.price,
// 		  producto.nodo
// 		);
// 		const productoRender = bebidasCalientes.render();
// 		campo3.appendChild(productoRender);
// 	  }
// 	}
//   };

//   document.addEventListener("DOMContentLoaded", () => {
// 	render();

// 	const barraBusqueda = document.querySelector("#buscador");
// 	barraBusqueda.addEventListener("input", async (event) => {
// 	  const busqueda = event.target.value;
// 	  await render(busqueda);
// 	});
//   });
