
let arra_ys = []; // Arrays literal 

let animales = ['Perro' , 'Gato' , 'Oveja' , 'Toro' ]; /* como se ve el array.
 LENGTH(Longitud): 4. 0 perro, 1 gato, 2 oveja, 3 toro */

console.log(animales);
console.log(animales[1]); // Debaría de mostrar gato, ya que es el numero 1 en nuestro array

// en caso de que quieras agregar otro valor en el array, podrias hacer ésto

animales[2] = 'Elefante'; /* Pero ya el espacio 2 esta ocupado por oveja,
entonces en nuestro array mostrará el elefante y perderás la oveja*/


animales[4] = 'León'; // por lo tanto, lo recomendado es elegir un numero que no este ocupado en nuestro array

console.log(animales); // Ahora nuestro array quedaría así: LENGTH: 5. 0 perro, 1 gato, 2 elefante, 3 toro 4 león
console.log(animales[4]); 

/*Al momento de agregar una valor a nuestro array, debaríamos de tener sentido con nuestra frecuencia.
De momento nuestro array va así: Length: 5. 0 perro, 1 gato, 2 elefante, 3 toro 4 león. Debaria de seguir con 
la logica de la frecuencia, ejemplo: va 1, 2, 3, 4, 5, 6... y así consecutivamente, no puedo saltar un numero
ya que En nuestro array se generará ese espacio que dejes depende del salto de numero que hiciste*/
// mira aquí un ejemplo
animales[7] = 'Pantera'; // Del 4 pasé a 7
console.log(animales); /* Ahora nuestro array se ve así:
LENGTH: 8. 0 perro, 1 gato, 2 elefante, 3 toro, 4 león, 5 empty(Vacío), 6 empty(Vacío), 7 pantera.
como puedes ver, hay 2 espacios vacios, lo cual no es el deber ser y nos generará confusiones en un futuro */

console.log(typeof animales); // Quiero ver que tipo de dato es mi array (deberia de ser objec)
