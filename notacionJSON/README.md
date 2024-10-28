## **Notación JSON**

**JSON (JavaScript Object Notation)** es un formato ligero de intercambio de datos que es fácil de leer y escribir para los humanos, y fácil de analizar y generar para las máquinas. Se utiliza ampliamente como formato para intercambiar datos entre un servidor y una aplicación web, y es un formato de datos estándar con muchos lenguajes de programación.

#### Sintaxis

- **Datos en pares nombre/valor**: Los datos JSON se representan como pares clave-valor.
- **Datos separados por comas**: Los datos JSON se separan por comas.
- **Llaves que contienen objetos**: Los datos JSON están encerrados en llaves `{}` para denotar objetos.
- **Corchetes que contienen arrays**: Los arrays JSON están encerrados en corchetes `[]`.

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": 30,
  "isStudent": false,
  "address": {
    "streetAddress": "123 Main Street",
    "city": "Anytown",
    "state": "CA",
    "postalCode": "12345"
  },
  "phoneNumbers": [
    { "type": "home", "number": "555-1234" },
    { "type": "work", "number": "555-5678" }
  ]
}
```

#### Puntos Clave

  - **Tipos de Datos**: JSON admite cadenas, números, objetos, arrays, booleanos y valores nulos.
  - **Formato Universal**: JSON es independiente del lenguaje de programación, lo que lo hace adecuado para el intercambio de datos.
  - **Parseo y Serialización**: JSON puede ser convertido en objetos JavaScript usando `JSON.parse()` y convertido de nuevo a JSON usando `JSON.stringify()`.

#### Uso

  - **APIs Web**: Muchas APIs web utilizan JSON para enviar datos entre servidores y navegadores web.
  - **Archivos de Configuración**: JSON se utiliza en archivos de configuración debido a su formato legible.
  - **Almacenamiento de Datos**: JSON se utiliza para almacenar e intercambiar datos estructurados en bases de datos y aplicaciones.

#### Ejemplo de Parseo y Serialización de JSON

```javascript
// Objeto con múltiples atributos, incluyendo un array de objetos
let user = {
  name: "John Doe",
  age: 35,
  address: {
    street: "Main Street",
    city: "New York",
    country: "USA"
  },
  orderHistory: [
    { id: 1, product: "Smartphone

", quantity: 1 },
    { id: 2, product: "Tablet", quantity: 2 },
    { id: 3, product: "Laptop", quantity: 1 }
  ]
};

// Convertir a JSON usando JSON.stringify()
let jsonUser = JSON.stringify(user);

console.log("Objeto convertido a JSON:");
console.log(jsonUser);

// Convertir de vuelta a objeto usando JSON.parse()
let parsedObject = JSON.parse(jsonUser);

console.log("\nJSON convertido de vuelta a objeto:");
console.log(parsedObject);
```