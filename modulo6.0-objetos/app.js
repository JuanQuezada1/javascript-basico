/*
  OBJETOS

  es una representacion abstracta de una cosa en la vida real
   }

*/

function describirPersona(datos){
   console.log(` ${datos.nombre} tiene una edad de ${datos.edad} y su estatura es de ${datos.estatura}`);
}

let persona = {
   nombre    : 'Juan',
   edad      : '30',
   estatura  : 1.62
}

describirPersona(persona);
 


