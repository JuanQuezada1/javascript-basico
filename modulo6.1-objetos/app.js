/*
  OBJETOS

  es una representacion abstracta de una cosa en la vida real 


-------------------------------------------------------------------------------

*/

let persona1 = {
   nombre    : 'Juan',
   edad      : '30',
   estatura  : 1.60
}

let persona2 = {
   nombre    : 'Gina',
   edad      : '29',
   estatura  : 1.62
}

let persona3 = {
   nombre    : 'Ania',
   edad      : '12',
   estatura  : 1.40
}

let personas = [persona1, persona2, persona3];


for (let i = 0; i < personas.length; i++){

   let persona = personas[i];
   
   console.log(`${persona.nombre} -- ${persona.edad} -- ${persona.estatura}`);

}

/*
--------------------------------------------------------------------------------------------------

mediante un ciclo FOR debe automatizar todas las personas en el ejercicio anterior */



 


