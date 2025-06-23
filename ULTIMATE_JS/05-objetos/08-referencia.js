let a = 10;
let b = a; // b es exactamente igual que 'a'

b++;
console.log(a,b); 

//Ahora con un objeto

let c = {}; //A 'c' le asignamos un objeto vacío
let e = c; // Y 'e' va A ser exactamente igual que 'c'

e.prop = 2; // Y a la variable de 'e' se le agregara la propiedad de 2, ya que esta es un objeto 
console.log(c,e); //Esto mostrará {prop: 2} {prop: 2}, esto pasa porque se esta modificando es la dirección 

// Que pasa con las funciones?

let f = 1; // creemos una variable que sea de valor 1

function suma (n){ // Hagamos un función suma que tenga un PARAMETRO(n)
    n++ // Aquí solo vamos aumentar el valor de 'n'
}
suma(f); // Luego llamamos a la funcion de suma y le vamos a pasar en su parametro la variable f que tiene de valor 1

console.log(f); /*Podrías creer que esto imprima un 2, ya que a 1 le aumentamos su valor cuando incrementamos 'n'
pero la realidad es que cada vez que definimos parametros, se va a crear una variable especial para cada parametro,
por lo tanto la variable 'f' es diferente al parametro que tenemos identificado como 'n' en nuesra función,
y por ésta razón es que f seguiria siendo igual a '1', ya que son variables distintas*/



/*Para que se cumpla lo que intentamos arriba podríamos indicar que la variable 'f' es un objeto, en este caso...
f va a ser g */

let g = {prop: 10};

function suma (n){
    n.prop++
}
suma(g);
console.log(g);