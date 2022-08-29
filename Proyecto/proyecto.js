//En mi caso eleji como camisetas como articulo de venta. 
//Calculo la variacion porcentual de cada mes para informar de como fueron los resultados de ventas de todo el año

let camisetasAnterior=prompt("Ingrese la cantidad de camisetas vendidas en el primer mes del año");
if(isNaN(camisetasAnterior))
{
 alert("Ingresó un dato no solicitado")
 camisetasAnterior=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas en el primer mes del año`)
}
let informe="";
let porcentaje;
let dif;
for(let i=2;i<=12;i++){

   camisetasActual=prompt(`Ingrese la cantidad de camisetas vendidas en el ${i}° mes del año`);
   if(isNaN(camisetasActual))
   {
    alert("Ingresó un dato no solicitado")
    camisetasActual=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas en el ${i}° mes del año`)
   }
   console.log(`${i}° mes anterior ${camisetasAnterior}`);
   console.log(`${i}° mes actual ${camisetasActual}`);

   if(camisetasAnterior<camisetasActual)
   {
    porcentaje=variacionPorcentual(camisetasActual, camisetasAnterior);
    dif=diferencia(camisetasActual, camisetasAnterior);
    informe+=`El ${i}° dia hubo un aumento de ${porcentaje}%, se vendio ${dif} mas que el mes anterior \n`;
    
   }
   else if(camisetasAnterior>camisetasActual){
    porcentaje=variacionPorcentual(camisetasActual, camisetasAnterior);
    dif=diferencia(camisetasActual, camisetasAnterior);
    informe+=`El ${i}° dia hubo una bajada de ${porcentaje}%, se vendio ${dif} menos que el mes anterior \n`;

   }
   else
   {informe+=`El ${i}° mes no hubo aumento ni bajada, se vendio igual que el mes anterior \n`;}
    
   camisetasAnterior=camisetasActual;

}
console.log(informe)

function variacionPorcentual(ventaActual,ventaAnterior)
{
return [(ventaActual-ventaAnterior)/ventaAnterior]*100;
}

function diferencia(ventaActual,ventaAnterior){

    return ventaActual-ventaAnterior;
}
