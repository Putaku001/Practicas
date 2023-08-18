/*let frutas= ["banana","manzana","pera"]

//acceder a un valor indibidualmente
console.log(frutas[2])

//acceder a todos los valore en array
for(let fruta of frutas){
    console.log(fruta)
}

//agregar valores a arrays
frutas.push("piña")
frutas.pop()//->elimina el ultimo valor
frutas.unshift("melocoton")
frutas.reverse()
console.log(frutas.indexOf("manzana"))
console.log(frutas.includes("melocoton"))
frutas.forEach(i => console.log(i))
*/

/*
numeros = []
otrosnumeros=[]
nuearray = []


for(i =1;i<=100;i++){
    mensaje = `el valor es: ${i}`
    numeros.push(mensaje)
}

for(i=101; i<=200; i++){
    mensaje = `el valor es: ${i}`
    otrosnumeros.push(mensaje)
}
nuearray=[...numeros,...otrosnumeros]

nuearray.forEach((i)=>{
    console.log(i)
})
*/

persona = {
    nombre: `Humberto`,
    edad: `18`,
    carrera:`software1`
}
persona2 = {
    nombre: `Miguel`,
    edad: `19`,
    carrera:`software2`
}
persona3 = {
    nombre: `Kenneth`,
    edad: `18`,
    carrera:`software3`
}
arrayobjetos = [persona,persona2,persona3]

arrayobjetos.forEach((i) =>{
    console.log(i)
})

console.log(arrayobjetos[0].nombre)
console.log(arrayobjetos[1].carrera)
console.log(arrayobjetos[2].edad)