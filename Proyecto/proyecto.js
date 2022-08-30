//En mi caso eleji como camisetas como articulo de venta. 
//Calculo la variacion porcentual de cada mes para informar de como fueron los resultados de ventas de todo el año
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
function validacionAnterior(valorAnterior)
{
    while(valorAnterior=="" || isNaN(valorAnterior))

    {
        if(valorAnterior=="") {
                alert("No ingresó nada");
                valorAnterior=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
        }
        if(isNaN(valorAnterior)){
                alert("Ingresó un dato no solicitado");
                valorAnterior=prompt(`Por favor, ingrese correctamente "la cantidad" de camisetas vendidas`);
         }
}
   return valorAnterior;
    }
    
//PROGRAMA PRINCIPAL
let camisetasAnterior=prompt("Ingrese la cantidad de camisetas vendidas en el primer mes del año");


if((camisetasAnterior=="" ) || (isNaN(camisetasAnterior)))
{camisetasAnterior=validacionAnterior(camisetasAnterior);}//llamado


for(let i=2;i<=12;i++){

   let camisetasActual=prompt(`Ingrese la cantidad de camisetas vendidas en el ${i}° mes del año`);
   
   if((camisetasActual=="" ) || (isNaN(camisetasActual))){
   camisetasActual=validacionActual(camisetasActual);}//llamado
   
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

