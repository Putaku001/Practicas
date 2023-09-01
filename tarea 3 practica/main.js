let array1 = [];
let array2 = [];

for (let i = 1; i <= 100; i++) {
    array1.push(i);
}

for (let i = 101; i <= 200; i++) {
    array2.push(i);
}

let media = (array1.reduce((acumulador, valorActual) => acumulador + valorActual, 0) + array2.reduce((acumulador, valorActual) => acumulador + valorActual, 0)) / (array1.length + array2.length);

console.log("La media de los dos arrays es: " + media);
