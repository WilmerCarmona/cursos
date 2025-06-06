/* Esto es un ejemplo de orden 
8/2 en JS aquí deberia de ir el signo de multiplicación (2+2)
8/2(2+2)
8/2(4)
8/2 = 4 x 4
4X4 = 16*/


let resultado = 8/2*(2+2); /*Cada vez que se vea una operacion matematica que contenga estos parentesis
 deberia de agregarse el signo de multiplicación antes */

console.log(resultado);


let result = 8/(2*(2+2)); // 2+2 = 4, 2x4 = 8, 8/8 = 1

console.log(result);