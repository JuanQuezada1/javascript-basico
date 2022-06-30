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

class Vehiculo {
   constructor (marca, tipo, puertas){
      this.marca         = marca;
      this.tipo          = tipo;
      this.puertas       = puertas;
      this.fechaCreacion = '29-JUN-22';
      this.encendido     = false;
      this.gasolina      = 100;

   }

   encenderVehiculo(){
      if (this.encendido){
         //La logica IF nos da como cierto que el moto esta encendido
         // por lo tanto no es necesario declarar la variable TRUE o FALSE
         console.error('El motor ya esta encendido...');
      } else {
         // La logica ELSE es lo contrario, por ende debemos declarar TRUE o FALSE
         this.encendido = true;
         console.log('Has encendido el motor');
      }
      return this;

   }

   realizarViaje(consumo){
      if (!this.encendido) return console.log('Vehiculo apagado');
      // cuando se coloca un ! es una negacion directa, por ende nos ahorramos el else
      if (consumo > this.gasolina) return console.log('No puede realizar el viaje: Gasolina ' + this.gasolina);
      this.gasolina = this.gasolina - consumo;
      return 'Le quedan: ' + this.gasolina;
   }
}

let vehiculo1 = new Vehiculo('Opel', 'Sedan', 4);
console.log(vehiculo1);









 


