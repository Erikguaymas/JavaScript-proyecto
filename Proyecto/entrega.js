/*
//DECLARACION
let arrayDeportivo = [];
let pregunta;
let desc;
let tot;
let id;

//FUNCIONES
function realizoCompra() {
  opcion = Number(prompt(`Elija el id del producto que quisiera comprar:`));

  while (opcion > 6 || isNaN(opcion) || opcion == "") {
    opcion = Number(
      prompt(`Elija correctamente el id del producto que quisiera comprar:`)
    );
  }
  console.log(
    `Se agregó el producto "${deportivos[
      opcion - 1
    ].nombre.toLocaleUpperCase()} a mi carrito"`
  );
  arrayDeportivo.push(deportivos[opcion - 1]);
}

function compraHecha() {
  let i = 1;
  alert("Mostraremos el carrito");
  arrayDeportivo.forEach((prod) => {
    alert(`${i}) ${prod.nombre} de ${prod.precio}`);
    i++;
  });

  do {
    pregunta = prompt(
      "Desea eliminar algun producto? (si o no)"
    ).toLocaleLowerCase();

    if (pregunta == "si") {
      descarto();
    } else if (pregunta == "no") {
      const lista1 = arrayDeportivo.map((el) => el.nombre);
      console.log(`Los productos comprados son ${lista1} `);
    } else {
      alert("Por favor, ingrese si o no");
    }
  } while (pregunta != "si" && pregunta != "no");
}
function descarto() {
  let i = 1;
  arrayDeportivo.forEach((prod) => {
    console.log(`${i} ${prod.nombre}`);
    i++;
  });
  opcion = Number(prompt(`Elija opcion del producto para eliminar (consola)`));
  while (opcion > arrayDeportivo.length || isNaN(opcion) || opcion == "") {
    opcion = Number(
      prompt(`Elija correctamente la opcion que quisiera eliminar (consola)`)
    );
  }
  arrayDeportivo.splice(opcion - 1, 1);
  const lista = arrayDeportivo.map((el) => `\n ${el.nombre}`);
  alert(`Los productos que estan en mi carrito son: ${lista} `);
}

function total() {
  tot = arrayDeportivo.reduce(
    (acumulador, elemento) => acumulador + elemento.precio,
    0
  );
  do {
    opcion = prompt("Con que medio paga? \n (1) Tarjeta \n (2) Efectivo");
    switch (opcion) {
      case "1":
        alert("Tendrás un 5% de descuento con tarjeta");
        descuento();
        break;
      case "2":
        alert(`El total a pagar es $${tot}`);
        break;
      default:
        alert("Ingresó incorrectamente");
        break;
    }
  } while (opcion != "1" && opcion != "2");
}

function descuento() {
  console.log(`El total a pagar es $${tot}`);

  desc = tot - [(tot * 5) / 100];
  console.log(`Con tarjeta se va a $${desc}`);
}

*/

//PROGRAMA
let i = 0;

const nombre = prompt("Ingrese su nombre");

const saludo = document.getElementById("nombre");

const parrafo = document.createElement("h1");

parrafo.innerHTML = `Hola bienvenido ${nombre}, acontinuación te mostraremos los productos disponibles`;
saludo.appendChild(parrafo);

const deportivos = [
  {
    id: 1,
    nombre: "Camiseta",
    equipo: "Selección Argentina",
    precio: 18000,
    imagen: "img/CamisetaSelArg.jpg",
  },
  {
    id: 2,
    nombre: "Camiseta",
    equipo: "Real Madrid",
    precio: 17000,
    imagen: "img/CamisetaReal.png",
  },
  {
    id: 3,
    nombre: "Campera",
    equipo: "Boca Juniors",
    precio: 18000,
    imagen: "img/CamperaBOCA.JPG",
  },
  {
    id: 4,
    nombre: "Short",
    equipo: "River Plate",
    precio: 6000,
    imagen: "img/ShortRIVER.jpg",
  },
  {
    id: 5,
    nombre: "Camperón",
    equipo: "Barcelona",
    precio: 20000,
    imagen: "img/chaquetaBARSA.jpeg",
  },
  {
    id: 6,
    nombre: "Pantalón",
    equipo: "PSG",
    precio: 8000,
    imagen: "img/PantalonPSG.jpg",
  },
];

let div = document.getElementById("cards");
console.log(div);

deportivos.forEach((elemento) => {
  let cont = document.createElement("div");
  cont.className = "card";
  cont.style.maxWidth = "400px";
  cont.innerHTML = `
<div class="row g-0">
  <div class="col-md-4">
    <img src="${elemento.imagen}" class="img-fluid rounded-start" alt="ERROR">
  </div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${elemento.nombre} ${elemento.equipo}</h5>
    <p class="card-text">Precio: $${elemento.precio}</p>
    <button type="button" class="btn btn-dark">Agregar al carrito</button>
  </div>
</div>
</div>
`;
  div.appendChild(cont);
});

let aprobacion = document.getElementById("aprobacion");

aprobacion.innerHTML = `<h3>Selecciona tu experiencia en la tienda</h3>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
<label class="form-check-label" for="flexRadioDefault1">
  Horrible
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
<label class="form-check-label" for="flexRadioDefault2">
  Regular
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
<label class="form-check-label" for="flexRadioDefault2">
  Excelente
</label>
</div>`;

/*

for (const elemento of deportivos) {
  console.log(elemento);
}
const info = deportivos.filter((el) => el.precio < 10000);
alert("Atento!!! aproveche nuestros precios \n");
for (const prod of info) {
  alert(prod.nombre + " de " + prod.equipo + " a $" + prod.precio);
}

realizoCompra();

do {
  pregunta = prompt(
    "Quieres realizar otra compra?\n 1)Si \n 2)No"
  ).toLocaleLowerCase();

  if (pregunta == "si") {
    realizoCompra();
  } else if (pregunta == "no") {
    compraHecha();
  } else {
    alert("Ingrese correctamente por favor");
  }
} while (pregunta != "no");

total();
alert("Gracias por la compra");
*/