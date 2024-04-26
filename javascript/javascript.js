var saludo= "hola mundo desde Java Script"
console.log(saludo)
//Comentarios
/*
Aqui va 
nuestros comentarios

Forma de escribir la sintaxis 
var nombre
var $nombre
var _nombre
var nombre1
var nombre_estudiante
COMO NO SE PUEDE ESCRIBIR UNA VARIABLE
var 8nombre
TAMPOCO SE PÚEDE UTILIZAR PLABRAS RESERVADAS DE JAVA SCRIPT
var if,while,case,for
¿COMO CREAMOS NUESTROS ARCHIVOS JS?
JAVASCRIPT.js
var holaMundo
def HolaMundo{
}
*/
/*--------Variables en Java Script -------------
Existen dos Tipos
1. var=> Es una variable global puede ser utilizada dentro de toda la vida DEL PROGRAMA con todos lo alcanzes
2. let=> Es una variable privada que se utiliza en una parte especifica de mi programa, quiere decir que es una variable local1

{
let hello="Hello"

}*/
var a
a=7
console.log("El valor de a es : ",a)
let b
b=6
console.log("El valor de b es : ",b)
console.log(window)
console.log(window.a)
console.log(window.b)
/*Variable tipo var*/
var musica="Baladas"
console.log("Variable anyes del bloque ",musica)
{
    var musica="Cumbia"
    console.log("La variable dentro del bloque ",musica)
}
console.log("La variable fuera del bloque ",musica)
 console.log ("****************************Let*********************************")
let musica2="Salsa"
console.log("Variable antes de entrar al bloque ",musica2)
{
    let musica2="Merenge"
    console.log("Variable antes de entrar al bloque ",musica2) 
}
console.log("Variable Fuera del bloque ",musica2)