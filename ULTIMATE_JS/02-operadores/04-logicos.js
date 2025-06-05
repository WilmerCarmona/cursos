// AND OR Y NOT

// AND en JS es &&
let mayor = false;
let suscrito = true;
// console.log( true && true); /* Cuando utilizamos and(&&)  estamos indicando que deben evaluar ambos valores
// ya que con el conjunto de estos valores obtendremos otro valor*/

// console.log( true && false);

//// AND en JS es &&
console.log('operacion and' , mayor && suscrito); // En esta operacion si ambas no se cumplen, el resultando será false

// OR en JS es ||
console.log('operacion or' , mayor || suscrito); // En esta solo es necesario de que se cumpla una para que sea true

// NOT en JS es !
console.log('operacion not' , !mayor ); /*En esta operacion podemos darnos cuenta de que la variable mayor es false
 pero al momento de usar el not (!mayor), va a invertir ese valor de false a true*/
let catalogoInfantil = !mayor;
