//PROGRAMA
let i;
let array = [];
let modal = document.getElementById("modal");
let comprado = document.getElementById("compra");
let subtotal = document.getElementById("subtotal");
let sumaParcial = 0;

const deportivos = [
  {
    id: 1,
    nombre: "Camiseta",
    equipo: "Selección Argentina",
    precio: 18000,
    imagen: "img/CamisetaSelArg.jpg",
    detalle:
      "Camiseta Adidas Hombre Uniforme Titular Qatar 2022. Todos los talles disponibles .",
  },
  {
    id: 2,
    nombre: "Camiseta",
    equipo: "Real Madrid",
    precio: 17000,
    imagen: "img/CamisetaReal.png",
    detalle:
      "Camiseta Adidas Manga corta Hombre Uniforme Titular Temporada 2022. Todos los talles disponibles",
  },
  {
    id: 3,
    nombre: "Campera",
    equipo: "Boca Juniors",
    precio: 18000,
    imagen: "img/CamperaBOCA.JPG",
    detalle:
      "Campera deportiva Adidas Hombre. Temporada invierno color azul 3 tiras amarillas estilo adidas.",
  },
  {
    id: 4,
    nombre: "Short",
    equipo: "River Plate",
    precio: 6000,
    imagen: "img/ShortRIVER.jpg",
    detalle:
      "Short Adidas Hombre Uniforme TItular Temporada 21/22. Todos los talles disponibles.",
  },
  {
    id: 5,
    nombre: "Camperón",
    equipo: "Barcelona",
    precio: 20000,
    imagen: "img/chaquetaBARSA.jpeg",
    detalle:
      "Chaqueta Acolchada Nike con capucha Temporada invierno Multicolor.",
  },
  {
    id: 6,
    nombre: "Pantalón",
    equipo: "PSG",
    precio: 8000,
    imagen: "img/PantalonPSG.jpg",
    detalle: "Pantalon strike Nike Hombre Modelo 22/23 Color azul.",
  },
];
let id = document.getElementById("nombre");
id.addEventListener("keypress", validar);
function validar(event) {
  console.log(event.keyCode);
  var key = event.keyCode;
  if ((key < 65 || key > 90) && (key > 122 || key < 97) && (key = !13)) {
    event.preventDefault();
  }
}

let clickeo = document.getElementById("formu");
clickeo.addEventListener("submit", muestra);
function muestra() {
  clickeo.remove();
  let contenido = document.getElementById("bienvenida");
  contenido.innerHTML = "";

  const parrafo = document.createElement("div");
  parrafo.className = "titulo";
  parrafo.style.maxWidth = "auto";

  parrafo.innerHTML = `<h3>Hola bienvenido ${id.value}, acontinuación te mostraremos los productos disponibles</h3>`;
  contenido.appendChild(parrafo);
  mostrar();
}

function mostrar() {
  let div = document.getElementById("cards");
  console.log(div);

  deportivos.forEach((elemento, indice) => {
    let cont = document.createElement("div");
    cont.className = "card";
    cont.style.maxWidth = "400px";
    cont.innerHTML = `
<div class="row g-0">
  <div class="col-md-4">
    <img src="${elemento.imagen}"  class="img-fluid rounded-start" alt="ERROR">
  </div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${elemento.nombre} ${elemento.equipo}</h5>
    <p class="card-text">Precio: $${elemento.precio}</p>
    <button  type="button" class="btn btn-dark" onClick="agregar(${indice})">Agregar al carrito</button>
  </div>
</div>
</div>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item border">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Ver detalles
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">${elemento.detalle}</div>
    </div>
  </div>
</div>


 
`;
    div.appendChild(cont);
  });
}

function agregar(indice) {
  const repe = array.some((el) => {
    return deportivos[indice].id == el.id;
  });
  const index = array.findIndex((el) => {
    return deportivos[indice].id == el.id;
  });
  //OPERACION TERNARIO
  repe
    ? ((array[index].cantidad = array[index].cantidad + 1),
      actualizar(),
      almacenar(),
      toas(array, index))
    : ((deportivos[indice].cantidad = 1),
      //SPREAD ARRAY DE OBJECTOS
      (elemento = [deportivos[indice]]),
      (array = [...array, ...elemento]),
      //array.push(deportivos[indice]);
      actualizar(),
      almacenar(),
      toas(deportivos, indice));
}

function actualizar() {
  modal.innerHTML = " ";

  array.forEach((el, ind) => {
    let subido = document.createElement("div");

    subido.innerHTML = `<div>
    <div><h2>${el.nombre} de ${el.equipo}</h2>
    <button type="button" class="btn btn-danger"  onclick="eliminar(${ind})">Eliminar</button></div>
<p>Precio: ${el.precio}</p>
</div>
<p>Cantidad: ${el.cantidad}</p>`;

    modal.appendChild(subido);

    sumaParcial = array.reduce(
      (acumulador, elemento) =>
        acumulador + elemento.precio * elemento.cantidad,
      0
    );
    subtotal.innerText = `Subtotal: ${sumaParcial}`;
  });
}

function eliminar(ind) {
  //OPERACION TERNARIO
  array[ind].cantidad == 1
    ? (array.splice(ind, 1), actualizar(), almacenar())
    : ((array[ind].cantidad = array[ind].cantidad - 1), actualizar());
}

function vaciarCarrito() {
  let long = array.length;
  array.splice(0, long);
  sumaParcial = 0;
  subtotal.innerText = `Subtotal: ${sumaParcial}`;
  actualizar();
}

let det = document.getElementById("detalles");

function compra() {
  tot = array.reduce(
    (acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad,
    0
  );
  let total = document.createElement("p");
  total.innerHTML = `EL total de la compra: $${tot}`;

  //Uso de desestructuracion
  comprado.appendChild(total);
  for (const { equipo, nombre } of array) {
    let paraf = document.createElement("p");
    paraf.innerHTML = `Disfrute de la compra de ${nombre} de ${equipo}`;
    det.appendChild(paraf);
  }
  almacenar();
}
function mensaje() {
  (async () => {
    /* inputOptions can be an object or Promise */
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          tarjeta: "tarjeta",
          efectivo: "efectivo",
        });
      }, 1000);
    });

    const { value: color } = await Swal.fire({
      title: "Seleccionar pago",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "ELIJA UNA OPCION, POR FAVOR!!";
        }
      },
    });

    if (color) {
      Swal.fire({ html: `Selecciono pagar con ${color}` }); //tendras un descuento de 5%
    }
  })();
}

function almacenar() {
  const pasaje = JSON.stringify(array);
  localStorage.setItem("Productos elegidos", pasaje);
}

let div1 = document.getElementById("cards");
/*
function filtro(categoria){
  console.log(categoria)
  if (categoria == "general") {
    div1.innerHTML = "";
    mostrar();
  }
  else{
    filtracion(deportivos.filter((depo) =>{
depo.nombre==categoria
    }))
   
  }



}*/

function filtro(categoria) {
  let filtrado;
  if (categoria == "Camiseta") {
    filtrado = deportivos.filter((prod) => prod.nombre == "Camiseta");
    filtracion(filtrado);
  }

  if (categoria == "general") {
    div1.innerHTML = "";
    mostrar();
  }
  if (categoria == "Short") {
    const filtrado1 = deportivos.filter((prod) => prod.nombre == "Short");

    filtracion(filtrado1);
  }
  if (categoria == "Campera") {
    const filtrado2 = deportivos.filter((prod) => prod.nombre == "Campera");

    filtracion(filtrado2);
  }
  if (categoria == "Camperón") {
    const filtrado3 = deportivos.filter((prod) => prod.nombre == "Camperón");

    filtracion(filtrado3);
  }
  if (categoria == "Pantalón") {
    const filtrado4 = deportivos.filter((prod) => prod.nombre == "Pantalón");

    filtracion(filtrado4);
  }
}

function filtracion(filtrado) {
  console.log(filtrado);
  div1.innerHTML = "";
  filtrado.forEach((elemento) => {
    let cont = document.createElement("div");
    cont.className = "card";
    cont.style.maxWidth = "400px";
    cont.style.maxHeight = "200px";
    cont.innerHTML = `
<div class="row g-0">
  <div class="col-md-4">
    <img src="${elemento.imagen}"  class="img-fluid rounded-start" alt="ERROR">
  </div>
<div class="col-md-8">
  <div class="card-body">
    <h5 class="card-title">${elemento.nombre} ${elemento.equipo}</h5>
    <p class="card-text">Precio: $${elemento.precio}</p>
    <button  type="button" class="btn btn-dark" onClick="agregar(${
      elemento.id - 1
    })">Agregar al carrito</button>
  </div>
</div>
</div>
`;
    div1.appendChild(cont);
  });
}

function toas(array, index) {
  //  console.log(array[indice])
  Toastify({
    text: `Se agregó ${array[index].nombre} de ${array[index].equipo}`,
    duration: 3000,
    gravity: `bottom`,
  }).showToast();
}
