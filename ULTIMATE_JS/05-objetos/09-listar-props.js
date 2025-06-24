//En los lenguajes dinamicos como ya lo habíamos dicho, a los objetos, se le pueden ir agregando o quitando propiedades

//podrias pasar por un error donde intentas acceder a una propiedad que ya está elimiada.
//Por lo que ahora veremos objetos que pudieron ser creadas de forma dinamica
const puntos = {
    x: 10,
    y: 20,
    dibujar(){
        console.log('Dibujando...');
    }
};

//delete puntos.dibujar;//Aquí se está eliminando el método. Podemos comentar y descomentar esta linea para verificar
//puntos.dibujar(); //esto perfectamente va a mostrar el metodo de dibujar(), pero y si ese método ha sido eliminado? ↑

//Entonces podriamos hacer in condicional para preguntas si existe ese método
if('dibujar' in puntos){// Se pasa el nombre del método de forma tipo string ('')
    puntos.dibujar();
}else{
    console.log('No se encuentra un método con ese éste nombre');
}

// De esta forma podemos acceder para listar todos los valores de las propiedades del objeto 

//let keys = Object.keys(puntos);
//console.log(Object.keys(puntos));
for(let llave of Object.keys(puntos)){ // esto nos va a listar la propiedad seguido de su valor 
    console.log(llave, puntos[llave]);
}

for(let entry of Object.entries(puntos)){ 
    console.log(entry);
}

for(let llav in puntos){ //esta es nueva
    console.log(llav, puntos[llav]);
}