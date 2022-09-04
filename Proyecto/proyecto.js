let informe="";
let variacion;
let dif;
let opcion;
let cantidad;
//FUNCIONES
const variacionPorcentual=(ventaActual,ventaAnterior)=>{return [(ventaActual-ventaAnterior)/ventaAnterior]*100;}

const diferencia=(ventaActual,ventaAnterior)=>{return ventaActual-ventaAnterior;}

function validacion(valor){

    while(valor=="" || isNaN(valor))
    {
     if(valor=="") {
        alert("No ingresó nada");
        valor=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
        }
    if(isNaN(valor)){
        alert("Ingresó un dato no solicitado");
        valor=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
        }
    }
return valor;
}

  function calculo(valorEntrada){
    
    for(let i=2;i<=meses.length;i++){

        cantidad=prompt(`Ingrese la cantidad vendidas en el mes ${meses[i-1]}`);
            if((cantidad=="" ) || (isNaN(cantidad))){
                cantidad=validacion(cantidad);
            }
            if(valorEntrada<cantidad)
            {
                variacion=variacionPorcentual(cantidad, valorEntrada);
                dif=diferencia(cantidad, valorEntrada);
                informe=`El mes de ${meses[i-1]} hubo un aumento de ${variacion}%, se vendio ${dif} mas que el mes anterior  \n`;
                
console.log(`venta en el mes ${meses[i-2]}: ${valorEntrada}
Venta en el mes ${meses[i-1]}: ${cantidad}
${informe}`)
            }
            else if(valorEntrada>cantidad)
            {
                variacion=variacionPorcentual(cantidad, valorEntrada);
                dif=diferencia(cantidad, valorEntrada);
                informe=`El mes de ${meses[i-1]} hubo una bajada de ${variacion}%, se vendio ${dif} menos que el mes anterior \n`;
                
console.log(`Venta en el mes ${meses[i-2]}: ${valorEntrada}
Venta en el mes ${meses[i-1]}: ${cantidad}
${informe}`)
            }
            else{   
                informe=`El mes de ${meses[i-1]} no hubo aumento ni bajada, se vendio igual que el mes anterior \n`;
                
console.log(`Venta en el mes ${meses[i-2]} :${valorEntrada}
Venta en el mes ${meses[i-1]} :${cantidad}
${informe}`)
                } 
    valorEntrada=cantidad;
     }
}

//array
const productos=[
    {   id:1,
        nombre:"camiseta",
        equipo: "Barcelona",
        stock: 500},
    {   id:2, 
        nombre:"short",
        equipo: "Barcelona",
        stock:300},
    {   id:3,
        nombre:"campera",
        equipo: "Barcelona",
        stock: 250},
    {   id:4,
        nombre:"botines",
        marca: "ADIDAS",
        stock:200}
]
const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

alert("A continuación te mostraré en la consola los productos disponibles");

//console.log(productos);
for (const producto of productos){

    console.log(producto);
}

do{ 
    opcion=Number(prompt(`Elija el id del producto que quisiera evaluar su variacion:`))
  }
while(opcion!=1 && opcion!=2 && opcion!=3 && opcion!=4)

console.log(`Su stock es de ${productos[opcion-1].stock}`);

let vendido=prompt(`Ingrese la cantidad vendida en el primer mes del año`);
        
if((vendido=="" ) || (isNaN(vendido))){
    vendido=validacion(vendido);}

let porcentual=(vendido*100)/productos[opcion-1].stock;
console.log(`${productos[opcion-1].nombre.toLocaleUpperCase()}
            Se vendio el ${porcentual}% del stock en el mes de ${meses[0]}`);

calculo(vendido);


