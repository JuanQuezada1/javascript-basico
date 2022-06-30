/*
   FUNCTION es un conjunto de lineas de codigo que realizan
   una tarea especifica y pueden retornar algo 

   let total = sumar (10,20);

   function sumar ( a,b ){
      return a + b;
   }

*/

function imprimirTabla(base,limite){
  
   for (let i = 1; i <= limite; i++){
   let resultado = base * i;
   console.log(base + ' x ' + i + ' = ' + resultado);
}

}

imprimirTabla(6,10);
imprimirTabla(7,10);



