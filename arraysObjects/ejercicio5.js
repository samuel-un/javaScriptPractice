// Ejercicio: Uso del método map en JavaScript

// 1. Creamos un array de números
const numeros = [1, 2, 3, 4, 5];

// 2. Utilizamos map para duplicar cada número
const numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados);

// 3. Creamos un array de objetos que representan productos
const productos = [
    { nombre: "Camiseta", precio: 20},
    { nombre: "Pantalón", precio: 50},
    { nombre: "Falda", precio: 30},
];

// 4. Utilizamos map para crear un array solo con los nombres de los productos
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

// 5. Utilizamos map para aplicar un descuento del 10% a todos los productos
const productosConDescuento = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio,
        precioConDescuento: producto.precio * 0.9
    };
});

/* Otra forma de hacerlo: 
const productosConDescuento = productos.map(producto => ({
    ...producto,
    precioConDescuento: producto.precio * 0.9
}));
console.log(productosConDescuento);

Los tres puntos que ves en la línea ...producto se llaman operador 
de propagación (spread operator) en JavaScript. Este operador permite "expandir" 
o "descomponer" un objeto o un array en sus propiedades o elementos individuales. 

El operador de propagación toma todas las propiedades del objeto 
producto y las "copia" en el nuevo objeto que estás creando. 
Es como si estuvieras escribiendo manualmente cada propiedad de 
producto en el nuevo objeto. Por ejemplo, si producto tiene 
propiedades nombre y precio, el resultado incluirá nombre y
 precio en el nuevo objeto.
*/

// 6. Creamos un array de strings con nombres
const nombres = ["ana", "juan", "maria"];

// 7. Utilizamos map para capitalizar la primera letra de cada nombre
const nombresCapitalizados = nombres.map(nombre => nombre[0].toUpperCase() + nombre.slice(1));
console.log(nombresCapitalizados);

// 8. Creamos una función que formatea un número como moneda
function formatearComoMoneda(numero) {
    return numero.toFixed(2) + '€';
}

// 9. Utilizamos map con la función formatearComoMoneda
const precios = [20, 50, 30];
const preciosFormateados = precios.map(precio => formatearComoMoneda(precio));
console.log(preciosFormateados);

// 10. Utilizamos map con el índice del elemento
const numerosConIndice = numeros.map((num, indice) => {
    return 'Número: ' + num + ', Índice: ' + indice;
});
console.log(numerosConIndice);