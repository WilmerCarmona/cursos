function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando...');
    }
}

let imprimir = new Punto(12,65);
console.log(imprimir);

// Y esta es la forma de 'Function'
const Point = new Function('x','y',`
this.x = x;
this.y = y;
this.dibujar = function(){console.log('Dibujando...');}
`);

const p = new Point(1,2);
console.log(p);

// Aunque lo mejor es que no se use esta forma