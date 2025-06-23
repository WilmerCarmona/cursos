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

let f = 1;

function suma (n){
    n++
}
suma(a);
console.log(a); // así no sumará el valor ya que la variable f es distinta a la variable f

//
let g = {prop: 10};

function suma (n){
    n.prop++
}
suma(g);
console.log(g);