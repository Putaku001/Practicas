let arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Agregar un nuevo elemento
arrays.push(11)

//elimina un valor 
arrays.pop()

//agrega un elemento al inici0
arrays.unshift(14)

//encuuentra un elemento y captura su indice
console.log(arrays.indexOf(6))

//Elimine un elemento por su indice
console.log(arrays.splice(8,1))

//agregar un elemento de tipo objeto
let objetoNuevo = { num: 25 }
arrays.push(objetoNuevo)

console.log(arrays)
