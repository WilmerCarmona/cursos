// Nos sirve para que nosotros podamos repetir las opciones de un objeto 

let user = { id: 1,
            name: 'Wilmer',
            lastname: 'Carmona',
            age: 22,
};

for(let prop in user){
    console.log(user[prop]);
};


let animal = {id:1, nombre: 'Perro', raza:'Dalmata'};

for(let prop in animal){
    console.log(animal[prop]);
}