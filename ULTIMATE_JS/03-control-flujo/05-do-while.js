/* El do while se comporta diferante al while normal, ya que el do while primero
 se ejecuta la porción de codigo que hayas agregado a tu do while, luego en lo ultimo es que se va a ejecutar
 la condición de to while*/

 // para esto usaremos el ejemplo del anterior archivo while "del 0 al 10 que numeros son pares"

let i = 0;

do{
    if(i % 2 == 0){
        console.log('Numero par', i);
    }
  i++;
}
while (i <= 10);