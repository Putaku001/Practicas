function calcularMediana(datos) {
    datos.sort(function(a, b) {
        return a - b;
    });

    let n = datos.length;
    let mediana;

    if (n % 2 === 0) {
        mediana = (datos[n / 2 - 1] + datos[n / 2]) / 2;
    } else {
        mediana = datos[Math.floor(n / 2)];
    }

    return mediana;
}

let conjuntoDatos = [3, 1, 7, 5, 9, 2, 8, 4, 6];
let mediana = calcularMediana(conjuntoDatos);
console.log("La mediana es: " + mediana);
