// Ejercicio: Manejo de objetos en JavaScript

// 1. Creamos un objeto que representa a un estudiante
const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Física", "Programación"],
    calificaciones: {
        matematicas: 90,
        fisica: 85,
        programacion: 95
    }
};

// 2. Accedemos y mostramos propiedades del objeto
console.log("Nombre:", estudiante.nombre);
console.log("Edad:", estudiante.edad);
console.log("Carrera:", estudiante.carrera);

// 3. Modificamos una propiedad
estudiante.edad = 36; 
console.log("Edad modificada:", estudiante.edad);

// 4. Añadimos una nueva propiedad
estudiante.email = "paloma@email.com";
console.log("Estudiante actualizado:", estudiante);

// 5. Recorremos las propiedades del objeto con for...in
for (let propiedad in estudiante) {
    console.log(propiedad + ":", estudiante[propiedad]);
}

// 6. Creamos un método en el objeto
estudiante.presentar = function() {
    console.log("Hola, soy " + this.nombre);
};

// 7. Llamamos al método
estudiante.presentar();

// 8. Creamos un array de objetos
const estudiantes = [
    {
        nombre: "Juan",
        edad: 20,
        carrera: "Ingeniería"
    },
    {
        nombre: "Ana",
        edad: 34,
        carrera: "Diseño"
    },
    {
        nombre: "Carmen",
        edad: 40,
        carrera: "Desarrollo Web"
    }
];

// 9. Recorremos el array de objetos
estudiantes.forEach(est => {
    console.log(est.nombre + ", Edad: " + est.edad + ", Carrera: " + est.carrera);
});

// 10. Buscamos un estudiante por su nombre
const nombreBuscado = "Ana";
const estudianteEncontrado = estudiantes.find(est => est.nombre === nombreBuscado);

if (estudianteEncontrado) {
    console.log("Estudiante encontrado:", estudianteEncontrado);
} else {
    console.log("Estudiante no encontrado");
}