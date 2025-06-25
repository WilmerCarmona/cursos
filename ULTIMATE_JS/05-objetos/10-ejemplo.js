class Persona{ //Se crea una clase persona
    constructor(nombre, apellido, edad){ //La cual va a tener un constructor donde contenga los atributos
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){ //Luego se le agrega un método, donde agregaremos los atributos para que estos luego sean llamados
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad}`);
    }
}

const persona = new Persona('Wilmer','Carmona', 21); //Se crea una constante de una persona la cual será una instancia de Persona
const persona2 = new Persona('Nicolas', 'Alvarez', 20);
persona.saludar(); 
persona2.saludar();

//Son una forma más corta de escribir funciones, y no cambian el this como las normales
const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};

saludar("Wilmer"); // Wilmer

//Tipos de scope

//Scope global 

let nombre = 'Wilmer';

function saludarGlobal(){
  console.log('Hola, soy ' + nombre);
}
saludarGlobal();

//Scope función

function saludarFuncion(){
  let edad = 21;
  console.log('Tengo '+edad,'años'); // La variable está dentro de la función, por lo tanto se verá rejada
}
saludarFuncion();
console.log('Tengo ',+edad,'años'); // La variable está fuera de la función, por lo tanto NO se verá rejada

