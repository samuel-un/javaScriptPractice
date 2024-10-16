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
function encontrarLibroPorTitulo(titulo) {
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase())
}

const libro1 = encontrarLibroPorTitulo("1984");
console.log("Libro encontrado por título:", libro1);

// 2. Función para encontrar el primer libro de un autor específico
function encontrarPrimerLibroPorAutor(autor) {
    return libros.find(libro => libro.autor === autor);
}

const libro2 = encontrarPrimerLibroPorAutor("Gabriel García Márquez");
console.log("Primer libro encontrado por autor:", libro2);

// 3. Función para encontrar un libro que cumpla múltiples criterios (autor y año)
function encontrarLibroPorCriterios(criterios) {
    return libros.find(libro => {
        return Object.keys(criterios).every(key => libro[key] === criterios[key]);
    });
}

const libro3 = encontrarLibroPorCriterios({ autor: "Jane Austen", año: 1813});
console.log("Libro encontrado por criterios", libro3);

// 4. Intentar encontrar un libro que no existe
const libroInexistente = encontrarLibroPorTitulo("El secreto");
console.log("Libro inexistente:", libroInexistente); // tiene que salir undefined