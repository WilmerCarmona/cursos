function suma(a){ // podemos agragar PARAMETROS dentro de la función que luego podrian ser usadas como variable
    return a + 30 ;
}

let resultado = suma(35); // Paso un ARGUMENTO a mi función, la cual sirve para especificar el valor de la funcion 

console.log(resultado);


function suma(a,b){ // Se pueden agregar varios PARAMETROS 
    return a + b + 3;
}

let resultad = suma (3 , 3); // Y depende de cuantos parametros agregues, debes agregar los ARGUMENTOS

console.log(resultad); 
console.log(typeof suma);

/*
function suma(a,b){
    console.log(arguments)
    return a + b ;
} 
 let resulta = suma(5,3,5,2,1);

 console.log(resulta);
 */