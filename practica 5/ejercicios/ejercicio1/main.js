function calcularModa(arr) {

    let frecuencia = {};
    
    arr.forEach(function (numero) {
        if (frecuencia[numero]) {
        frecuencia[numero]++;
} else {
        frecuencia[numero] = 1;
}
    });

    let moda;
    let maxFrecuencia = 0;
    for (let numero in frecuencia) {
        if (frecuencia[numero] > maxFrecuencia) {
            moda = numero;
            maxFrecuencia = frecuencia[numero];
        }
    }

    return moda;
}  
const conjuntoDeDatos = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const moda = calcularModa(conjuntoDeDatos);
console.log("La moda es:", moda);