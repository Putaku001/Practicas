const usuarios = [
    {"name": "user1", "edad": 21, "carrera": "software", "year": 1 },
    {"name": "user22", "edad": 20, "carrera": "doctor", "year": 4 },
    {"name": "user13", "edad": 47, "carrera": "veterinario", "year": 2 },
    {"name": "YO", "edad": 18, "carrera": "ingeniero de sueños", "year": 3 },
    {"name": "user16", "edad": 29, "carrera": "actor de doblaje", "year": 8},
    {"name": "user 2", "edad": 81, "carrera": "ingeniero de sueños", "year": 8}

]

/*
const usuariosfilter = usuarios.filter( (x) => {
    return x.carrera == "software"
})
console.log(usuariosfilter)

const usuariofilter2 = usuarios.filter((i)=>{
    return i.carrera == "ingeniero de sueños" && i.edad==18
})
console.log(usuariofilter2)
*/



const usuariosmap = usuarios.map((i)=>{
    return{
        "nombre":i.name,
        "edad":i.edad
    }
})
console.log(usuariosmap)