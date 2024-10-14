//objetos en javaScript 
// varias formas de construir objetos
// literal
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador"
};

//constructor 
let persona2 = new Object();
persona2.nombre = "Juan"
persona2.edad = 30,
persona2.profesion = "Desarrollador";

// constructor personalizado
function Persona(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
}

let juan = new Persona("Juan", 30, "Desarrollador");
