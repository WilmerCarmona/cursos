
// Ciclo normal
let i = 0;

while(i <= 10){
    console.log(i);
    i++
}
 console.log('Fin del ciclo NORMAL');

 // Ciclo con numero pares

let w = 0;
 while(w <= 20){
    if(w % 2 == 0){ // Esto verifica si el número actual es par, si el residuo de dividirlo entre 2 es 0, entonces es par
        console.log('Numero par',w);
    }
    w++;
 }

 console.log('Fin del ciclo PAR')