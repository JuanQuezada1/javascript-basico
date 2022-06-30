/*
   EJERCICIO:

   dado el siguiente arreglo: [1,6,8,4,2,7,10,3,5];
   utilizando el ciclo FOR, barra todo el ejemplo y determine.
   
   CUAL ES EL NUMERO MAYO?
-------------------------------------------------------------------------------

*/

let numeros = [1,6,8,4,2,7,10,3,5];
let mayor   = -999999;

for ( let i = 0; i <= numeros.length; i++ ){

   if (numeros[i] >= mayor){
      mayor = numeros[i];
   }
}

console.log('El numero mayor es: ' + mayor);













 


