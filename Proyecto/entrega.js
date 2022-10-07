let i;
let array = [];
let modal = document.getElementById("modal");
let comprado = document.getElementById("compra");
let subtotal = document.getElementById("subtotal");
let sumaParcial = 0;

let id = document.getElementById("nombre");
    id.addEventListener("keypress", validar);

function validar(event) {
  var key = event.keyCode;
    if ((key < 65 || key > 90) && (key > 122 || key < 97) && (key = !13)) {
      event.preventDefault();
      }
}

let clickeo = document.getElementById("formu");
    clickeo.addEventListener("submit", muestra);

function muestra() {
  clickeo.remove();
  
  Swal.fire(`Hola bienvenido ${id.value}, acontinuación te mostraremos los productos disponibles`)
  
}

let deportivos=[]

fetch("./datos.json")
  
.then(resp=>resp.json())

.then(datas=>{
  
  deportivos=datas
let div = document.getElementById("cards");
  console.log(div);

  deportivos.forEach((elemento, indice, arr) => {
    
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
<div class="accordion">
<div class="accordion-item" >
<h2 class="accordion-header" >
<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" onClick="ocultar(${indice})">
  Ver detalle
</button>
</h2>
<div  class="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
  ${elemento.detalle}
</div>
</div>
</div>
</div>
`;
  div.appendChild(cont);
  });
})


function ocultar(indice){

const div=document.getElementsByClassName("accordion-collapse")
const button=document.getElementsByClassName("accordion-button")
if(div[indice].classList.contains('show')){
div[indice].classList.remove("show")
button[indice].classList.add("collapsed")
}

else{
  div[indice].classList.add("show")
  button[indice].classList.remove("collapsed")
}


}

function agregar(indice) {
  console.log(deportivos)
  const repe = array.some((el) => {
    return deportivos[indice].id == el.id;
  });
  const index = array.findIndex((el) => {
    return deportivos[indice].id == el.id;
  });
  
  if(repe){
     (array[index].cantidad = array[index].cantidad + 1);
      actualizar();
      almacenar();
      toas(array, index);
  }else{ 
      (deportivos[indice].cantidad = 1);
      //SPREAD ARRAY DE OBJECTOS
      (elemento = [deportivos[indice]]);
      (array = [...array, ...elemento]);
      
      actualizar();
      almacenar();
      toas(deportivos, indice);
}
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

  if(array[ind].cantidad == 1){
     array.splice(ind, 1);
      actualizar();
       almacenar();
  }
  else { 
    (array[ind].cantidad = array[ind].cantidad - 1); 
    actualizar();
}}

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

function filtro(categoria){
  console.log(categoria)
  if (categoria == "general") {
    div1.innerHTML = "";
    mostrar();
  }
  else{
    filtracion(deportivos.filter(produ =>
produ.nombre==categoria
    ))
   
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
  Toastify({
    text: `Se agregó ${array[index].nombre} de ${array[index].equipo}`,
    duration: 3000,
    gravity: `bottom`,
  }).showToast();
}
