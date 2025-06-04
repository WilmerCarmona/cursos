

let nombre;
let region;
let edad;

const personaje = {
/*Llave*/ nombre: "Wilmer" /*Valor*/, 
          region: "Costeño",
          edad: 21,
};

console.log(personaje); 
console.log(personaje.nombre , personaje.edad); //esta es una forma de mostrar valores de tu llave por separado 
console.log(personaje['region']); // y esta es otra forma 
personaje.edad = 25;  // De esta forma se puede cambiar una propiedad (Usando const no funciona)
 delete personaje.nombre; // En caso de que quiera eliminar una de estos atributos puedo hacer ésto
 console.log(personaje)


// con "const" no puedes cambiar el valor del atributo en la llave y debes de definir la constante(dar un valor al atributo en el inicio)

/*const nombre = "Nicolas";
const region = "Paisa";
const edad = 24;

let personaje = {
    nombre: "Nicolas",
    region: "Paisa",
    edad: 24,
};

console.log(personaje.region); 
console.log(personaje.nombre , personaje.edad);
*/