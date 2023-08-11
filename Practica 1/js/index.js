//ejercicio 1
edad=prompt("ingresa una edad")

if(edad > 18 && edad <= 100){
    alert("El usuario es mayor de edad")
}else if(edad < 18 && edad >=1){
    alert("el usuario es menor de edad")
}else if(edad == 18){
    alert("el usuario tiene 18 años")
}else if(edad > 100){
alert("el usuario esta en las ultimas")
}else if(edad <= 0){
    alert("edad invalida")
}

//ejercicio 2
suma=0
i=1
while(i <=100){
    suma +=i
    i++
}
alert(suma)

//ejercicio 3
num = prompt("ingresa un numero")

for(i = 1; i<=10;i++){
    alert(num+ " por " + i + " es igual a: "+(num*i))
}