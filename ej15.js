/*//objetos en javaScript 
// varias formas de construir objetos
// literal
let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    hobbies: ["reading", "travelling"]
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
let maaria = new Persona("María", 30, "Diseñadora");

// acceder a las propiedades de un objeto
console.log(persona.nombre); //dot notation
console.log(persona["edad"]); //notación corchetes
console.log(persona.hobbies[1]);

// métodos de objetos 
// son funciones que están asociadas a un objeto
let persona3 = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre);
    }
};
persona3.saludar(); // Hola, soy Juan

// prototipos de objetos *ATENCIÓN PRÓXIMO DÍA*
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log("Hola, soy " + this.nombre);
};

let juan = new Persona("Juan", 30);
juan.saludar(); // "Hola, soy Juan"


// funciones comunes que tienen los objetos */

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Desarrollador",
    hobbies: ["reading", "travelling"]
};


//Object.keys() devuelve un array con las claves (nombre de las propiedades)
//console.log(Object.keys(persona));
// devuelve un array con los valores de las propiedades
//console.log(Object.values(persona));
//devuleve un array de pares [clave, valor]
console.log(Object.entries(persona));


let persona2 = {team: "Málaga CF"};
Object.assign(persona, persona2);
console.log((persona));

// previene que un objeto sea modificado
Object.freeze(persona);
persona.edad = 35;
console.log(persona.edad);

// no deja eliminar propiedades pero sí modificarlas
Object.seal(persona);
delete persona.nombre; // no tendrá efecto
persona.edad = 35; // sí permite


