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
    },
    estudiar: function() {
            console.log(this.nombre + " esta estudiando en este momento.");
    } 
}; 

// 2. Accedemos y mostramos propiedades del objeto
console.log("Acceder a las propiedades del objeto.");
console.log(estudiante);

// 3. Modificamos una propiedad
console.log("\nModificar la propiedad del objeto edad.");
console.log("Antigua edad: " + estudiante.edad);
estudiante.edad = 21;
console.log("Nueva edad: " + estudiante.edad);

// 4. Añadimos una nueva propiedad
console.log("\nAñadir nueva propiedad al objeto.");
estudiante.sexo = "M";
console.log(estudiante);

// 5. Recorremos las propiedades del objeto con for...in
console.log("\nRecorrer las propiedades del objeto con for in.");

for (let clave in estudiante){
    console.log(clave + ": " + estudiante[clave]);
}

// 6. Creamos un método en el objeto
console.log("\nCrear metodo en el objeto.");
// Método añadido arriba, dentro del objeto estudiante 
console.log("Método estudiar creado.");

// 7. Llamamos al método
console.log("\nImprimir método: ");
estudiante.estudiar();

// 8. Creamos un array de objetos
console.log("\nArray de objetos creado.");
let estudiantes = [
    {
        nombre: "Samuel",
        edad: 20,
        carrera: "DAW",
    },
    {
        nombre: "Luis",
        edad: 22,
        carrera: "DAW",
        materias: ["DWEC", "DWES", "Despliegue", "Diseño"],
        calificaciones: {
            dwec: 90,
            dwes: 85,
            despliegue: 95,
            diseño: 100,
        },
    }
]

// 9. Recorremos el array de objetos
console.log("\nRecorrer array de objetos: ");
for (let clave in estudiantes){
    console.log(estudiantes[clave]);
}

// 10. Buscamos un estudiante por su nombre
console.log("\nBuscar estudiante por su nombre.");
let findName = "Samuel";
let foundStudent = estudiantes.find(est => est.nombre === findName);

if (foundStudent){
    console.log("El estudiante " + findName + " fue encontrado. ", foundStudent);
}
else {
    console.log(`El estudiante ${findName} no fue encontrado.`);
}
