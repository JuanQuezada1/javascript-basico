/*
  CLASES

  Es igual que los objetos, pueden ser representaciones abstractas de cada cosa

  SE RECOMIENDA COLOCAR LA PRIMERA LETRA MAYUSCULA EN CADA CLASE

  EJEMPLO:
           class Galleta {
            constructor (botones, sabor){
               this.boton         = boton;
               this.sabor         = sabor;
               this.fechaCreacion = 'HOY';
            }
           }

Los objetos son utiles para ciertos problemas
-------------------------------------------------------------------------------

*/

class Carro {
   constructor (marca, tipo, puertas){
      this.marca   = marca;
      this.tipo    = tipo;
      this.puertas = puertas;
      this.fechaCreacion = '29-JUN-22';

   }
}

let carro1 = new Carro('Opel', 'Sedan', 4);
console.log(carro1);









 


