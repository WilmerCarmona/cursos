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


const saludar = (nombre) => {
  console.log(`Hola ${nombre}`);
};

saludar("Wilmer"); // Wilmer
