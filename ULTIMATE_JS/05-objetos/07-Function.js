function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando...');
    }
}
// let imprimir = new Punto(60,65);
// console.log(imprimir);


//Este es el metodo 'Call' que tienen las funciones 
let punto = {z : 70}; // Esto lo que nos ayuda es a extender el objeto 
//Punto.call(punto, 60, 65);// luego lo pasamos acá como primer valor, con el valor de los objetos que ya tenemos arriba
 /*La función 'call' permite llamar funciones a las cuales les puedes pasar el contexto de 'this'
Y así poder aumentar los objetos que le estas pasando. Con ésto se puede reutilizar codigo*/

/*ademas de 'call' tambien tenemos 'apply' que hace exactamente lo mismo que call, con la diferencia de que todos
los argumentos que ya tenemos deben de ser pasados con la forma de un array*/
Punto.apply(punto, [1,2]) ;

console.log(punto);

// Y esta es la forma de 'Function'
const Point = new Function('x','y',`
this.x = x;
this.y = y;
this.dibujar = function(){console.log('Dibujando...');}
`);

const p = new Point(1,2);
console.log(p);

// Aunque lo mejor es que no se use esta forma