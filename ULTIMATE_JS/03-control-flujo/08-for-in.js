// Nos sirve para que nosotros podamos repetir las opciones de un objeto 

let user = { id: 1,
            name: 'Wilmer',
            lastname: 'Carmona',
            age: 22,
};

for(let prop in user){
    console.log(prop);
}