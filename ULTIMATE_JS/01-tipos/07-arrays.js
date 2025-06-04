
let arra_ys = []; // Arrays literal 

let animales = ['Perro' , 'Gato' , 'Oveja' , 'Toro' ]; // como se ve el array. length: 4. 0 perro, 1 gato, 2 oveja, 3 toro  
console.log(animales);
console.log(animales[1]); // Debaría de mostrar gato, ya que es el numero 1 en nuestro array

// en caso de que quieras agregar otro valor en el array, podrias hacer ésto
animales[2] = 'Elefante'; // Pero ya el espacio 2 esta ocupado por oveja, entonces en nuestro array mostrará el elefante y perderás la oveja
animales[4] = 'León'; // por lo tanto, lo recomendado es elegir un numero que no este ocupado en nuestro array
console.log(animales); // Ahora nuestro array quedaría así: length: 5. 0 perro, 1 gato, 2 elefante, 3 toro 4 león
console.log(animales[4]); 