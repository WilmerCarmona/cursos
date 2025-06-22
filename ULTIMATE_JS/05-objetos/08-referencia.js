let a = 10;
let b = a;

b++;
console.log(a,b);

//Ahora con un objeto

let c = {};
let e = c;

e.prop = 2;
console.log(c,e);

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