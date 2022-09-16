//PROGRAMA
let i;
const array = [];
let subido = document.createElement("li");

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

const saludo = document.getElementById("entrada");
saludo.addEventListener("submit", validar);

function validar() {
  let nombre = document.getElementById("nombre").value;
  console.log(nombre);

  let contenido = document.getElementById("bienvenida");
  contenido.innerHTML = "";

  const parrafo = document.createElement("div");
  parrafo.className = "titulo";
  parrafo.style.maxWidth = "auto";

  parrafo.innerHTML = `<h1>Hola bienvenido ${nombre}, acontinuación te mostraremos los productos disponibles</h1>`;
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
    <img src="${elemento.imagen}" class="img-fluid rounded-start" alt="ERROR">
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
  array.push(deportivos[indice]);
  let carga = document.getElementById("agregado");

  array.forEach((el) => {
    subido.innerHTML = `<div><h1>Notificacion</h1>
<p>Se agregó al carrito ${el.nombre} de ${el.equipo}</p>
<p>Precio: ${el.precio}</p>
</div>`;

    carga.appendChild(subido);
  });
}
