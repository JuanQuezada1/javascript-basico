/*
      EJERCICIO:
   Realice un algoritmo que permita la impresion en consola de la siguiente tabla:
   1  2  3  4  5 
   2  4  6  8  10
   3  6  9  12 15 
   4  8  12 16 20
   5  10 15 20 25
   Se debe hacer con ciclo FOR
-------------------------------------------------------------------------------
*/

for (let i = 1; i <= 5; i++){
   let fila = '';
   for (let b = 1; b <= 5; b++){
    fila += `${ b * i}    `;
   }
   console.log(fila);
}














 


