// Ejercicio: Uso del método find en JavaScript

// 1. Creamos un array de objetos que representan libros
const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        genero: "Distopía"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        año: 1943,
        genero: "Fábula"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        genero: "Romance"
    },
    {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        año: 1981,
        genero: "Novela"
    }
];

// 1. Función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)
function findTitle(titulo){
    let foundBook = libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());

    if (foundBook){
        console.log("El libro " + titulo + " fue encontrado. ", foundBook);
    }
    else {
        console.log(`El libro ${titulo} no fue encontrado.`);
    }
}

// 2. Función para encontrar el primer libro de un autor específico
function findFirstBookAuthor(autor) {
    let foundBook = libros.find(libro => libro.autor === autor);

    if (foundBook){
        console.log("El libro del autor " + autor + " fue encontrado. ", foundBook);
    }
    else {
        console.log(`El libro del autor ${autor} no fue encontrado.`);
    }
}

// 3. Función para encontrar un libro que cumpla múltiples criterios
function findBookForAuthorAndYear(autor, año){
    let foundBook = libros.find(libro => libro.autor === autor && libro.año === año)

    if (foundBook){
        console.log("El libro del autor " + autor + " y año " + año + " fue encontrado. ", foundBook);
    }
    else {
        console.log(`El libro del autor ${autor} y año ${año} no fue encontrado.`);
    }
}

// 4. Intentar encontrar un libro que no existe
findFirstBookAuthor("Desconocido");

// Ejemplos de prueba

// findTitle("Orgullo y prejuicio");
// findFirstBookAuthor("Jane Austen");
// findBookForAuthorAndYear("Jane Austen", 1813);
