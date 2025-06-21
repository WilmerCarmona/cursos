function Punto(x,y){
    this.x = x;
    this.y = y;
    this.dibujar = function(){
        console.log('Dibujando...');
    }
}

let imprimir = new Punto(12,65);
console.log(imprimir);