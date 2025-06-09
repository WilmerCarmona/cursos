/* El bucle for in nos permite recorrer todas las propiedades (claves) de un objeto
por cada propiedad, podemos acceder a su nombre y a su valor*/

// Creamos un objeto llamado user con varias propiedades
let user = {
    id: 1,
    name: 'Wilmer',
    lastname: 'Carmona',
    age: 22,
};

// Recorremos todas las propiedades del objeto "user"
for (let prop in user) {
    // "prop" será, en cada vuelta, el nombre de una propiedad
    // user[prop] nos da el valor asociado a esa propiedad
    console.log(user[prop]); // Muestra 1, 'Wilmer', 'Carmona', 22
}


for(let prop in user){
    console.log(user[prop]);
};

let animal = {id:1, nombre: 'Perro', raza:'Dalmata'};

for(let prop in animal){
    console.log(animal[prop]);
}