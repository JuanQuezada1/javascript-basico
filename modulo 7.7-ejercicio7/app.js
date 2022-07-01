/*
      EJERCICIO:
   Crear una función que reciba 3 argumentos numéricos (a,b,c), la función se debe llamar 
   max, la función debe determinar cual es el mayor de los 3 y retornarlo... La función debe trabajar así:

   let mayor = max(5,2,6);

   console.log(mayor); //6
-------------------------------------------------------------------------------
*/

function max (a,b,c){
   let mayor;

   if (a > b){
      if (a > c){
         mayor = a;
      }else{
         mayor = c;
      }
   }else{
      if (b > c){
         mayor = b;
      }else{
         mayor = c;
      }
   }
   
   return mayor;
}

let mayor = max(5,2,6);

console.log(mayor); //6