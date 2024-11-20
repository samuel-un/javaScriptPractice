// Ejercicio: Uso del método filter en JavaScript

// 1. Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos filter para obtener solo los números pares
<<<<<<< HEAD
let pares = numeros.filter(function(numero) {
    return numero % 2 == 0;
});

// 3. Creamos un array de objetos que representan personas
const personas =  [
    {
        nombre: "Samuel",
        edad: 20,
        sexo: M
    },
    {
        nombre: "Jonnie",
        edad: 32,
        sexo: M
    },
    {
        nombre: "Ginn",
        edad: 38,
        sexo: F
    }
];

// 4. Filtramos personas mayores de 25 años
    let mayoresDe25 = personas.filter(function(mayorDe25){
        return persona.edad > 25;
    });

// 5. Filtramos personas que viven en Madrid


// 6. Creamos una función para filtrar por ciudad


// 7. Filtramos personas cuyo nombre empiece por 'M'


// 8. Creamos un array de strings


// 9. Filtramos palabras con más de 6 letras


// 10. Combinamos múltiples condiciones en un filtro


// 11. Filtramos usando una lista de valores permitidos
=======
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares);

// 3. Creamos un array de objetos que representan personas
const personas = [
    { nombre: "Juan", edad: 30, ciudad: "Madrid"},
    { nombre: "Ana", edad: 36, ciudad: "Barcelona"},
    { nombre: "Luis", edad: 40, ciudad: "Madrid"},
    { nombre: "María", edad: 43, ciudad: "Valencia"},
    { nombre: "Pepa", edad: 22, ciudad: "Madrid"},
]

// 4. Filtramos personas mayores de 25 años
const mayoresDe25 = personas.filter(persona => persona.edad > 25);
console.log(mayoresDe25);

// 5. Filtramos personas que viven en Madrid
const personasEnMadrid = personas.filter(persona => persona.ciudad == "Madrid");
console.log(personasEnMadrid);

// 6. Creamos una función para filtrar por ciudad
/*const filtroPersonas = {
    personas: personas, 
    filtrarPorCiudad: function(ciudad) {
        return this.personas.filter(persona => persona.ciudad == ciudad)
    }
}*/

function filtrarPorCiudad(personas, ciudad) {
    return personas.filter(persona => persona.ciudad == ciudad);
}

const enBarcelona = filtrarPorCiudad(personas, "Barcelona");
console.log(enBarcelona);

// 7. Filtramos personas cuyo nombre empiece por 'M'
const nombresConM = personas.filter(persona => persona.nombre[0] == 'M');
console.log(nombresConM);

// Otra forma de hacerlo:
/* const nombresConM = personas.filter(persona => persona.nombre.startsWith('M'));
console.log(nombresConM); */

// 8. Creamos un array de strings
const palabras = ["hola", "mundo", "javascript", "programación", "amor"];

// 9. Filtramos palabras con más de 6 letras
const palabrasLargas = palabras.filter(palabra => palabra.length > 6);
console.log(palabrasLargas);


>>>>>>> origin/main
