let informe="";
let porcentaje;
let dif;

//FUNCIONES
function variacionPorcentual(ventaActual,ventaAnterior)
{
return [(ventaActual-ventaAnterior)/ventaAnterior]*100;
}

function diferencia(ventaActual,ventaAnterior){

    return ventaActual-ventaAnterior;

}
function validacionActual(valorActual){

    while(valorActual=="" || isNaN(valorActual))
    {
     if(valorActual=="") {
        
            alert("No ingresó nada");
            valorActual=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
        }
    if(isNaN(valorActual)){
            alert("Ingresó un dato no solicitado");
            valorActual=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
    } }
  return valorActual
}

  function calculo(valorEntrada)
  {
    alert(`Su stock inicial es ${valorEntrada}`);
    for(let i=2;i<=12;i++){

        let camisetasActual=prompt(`Ingrese la cantidad vendidas en el ${i}° mes del año`);
        
        if((camisetasActual=="" ) || (isNaN(camisetasActual))){
        camisetasActual=validacionActual(camisetasActual);}//llamado
        

        if(valorEntrada<camisetasActual)
        {
         porcentaje=variacionPorcentual(camisetasActual, valorEntrada);
         dif=diferencia(camisetasActual, valorEntrada);
         informe=`El ${i}° dia hubo un aumento de ${porcentaje}%, se vendio ${dif} mas que el mes anterior \n`;
         console.log(`
            ${i}° mes anterior ${valorEntrada}
            ${i}° mes actual ${camisetasActual}
            ${informe}`)
        }
        else if(valorEntrada>camisetasActual){
         porcentaje=variacionPorcentual(camisetasActual, valorEntrada);
         dif=diferencia(camisetasActual, valorEntrada);
         informe=`El ${i}° dia hubo una bajada de ${porcentaje}%, se vendio ${dif} menos que el mes anterior \n`;
         console.log(`
            ${i}° mes anterior ${valorEntrada}
            ${i}° mes actual ${camisetasActual}
            ${informe}`)
        }
        else
        {   
            informe=`El ${i}° mes no hubo aumento ni bajada, se vendio igual que el mes anterior \n`;
            console.log(`
            ${i}° mes anterior ${valorEntrada}
            ${i}° mes actual ${camisetasActual}
            ${informe}`)
        } 
        valorEntrada=camisetasActual;
         }
}

//array
const producto=[];

const vestimenta={
    nombre:"camiseta",
    equipo: "Barcelona",
    stockInicial: 500
}
const vestimenta1={
    nombre:"short",
    equipo: "Barcelona",
    stockInicial:300
    
}
const vestimenta2={
    nombre:"campera",
    equipo: "Barcelona",
    stockInicial: 250
}
const vestimenta3={
    nombre:"botines",
    marca: "ADIDAS",
    stockInicial:200
}
producto.push(vestimenta);
producto.push(vestimenta1);
producto.push(vestimenta2);
producto.push(vestimenta3);

console.log("Mis productos principales:",producto);


let stockCamisetas=(producto[0].stockInicial);
//console.log(stockCamisetas);
let stockShort=(producto[1].stockInicial);
//console.log(stockShort);
let stockCampera=(producto[2].stockInicial);
//console.log(stockCampera);
let stockBotines=(producto[3].stockInicial);
//console.log(stockBotines);

let opcion=prompt(`Ingrese la opcion del producto que quisiera averiguar su variacion en el año:
1) Camisetas
2) Short
3) Camperas
4) Botines`)

do{

switch(opcion){
    case "1":
console.log("CAMISETAS")
    calculo(stockCamisetas);
break;
case "2":
console.log("SHORT")
    calculo(stockShort);
break;
case "3":
console.log("CAMPERA")
    calculo(stockCampera);
break;
case "4":
    console.log("BOTINES")
calculo(stockBotines);
    break;
default:
    {alert("Opcion incorrecta");
    let opcion=prompt(`Ingrese la opcion del producto que quisiera averiguar su variacion en el año:
    1) Camisetas
    2) Short
    3) Camperas
    4) Botines`)}
    break;

}}
while(opcion=="1" || opcion=="2" || opcion=="3" || opcion=="4")