// Break nos permite salirnos de nuestro bucle donde nosotros indiquemos que lo hagamos
// mientras que continue nos permite saltar esa iteración que asignamos saltar en nuestro codigo 
// ejemplo

let i = 0;

while(i < 8){
    i++;
    if(i === 3){ // Si "i" es exactamente igual a 3 entonces el "Continue" permitirá saltar esta iteración
        continue;
    }

    console.log('Este numero es: ', i);
}