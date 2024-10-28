/*JSON.stringify() //serialización a JSON: es el proceso de convertir un objeto JavaScript en una cadena JSON.

const objeto = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Málaga"
};

const jsonString = JSON.stringify(objeto);
console.log(jsonString);*/

// JSON.parse()

/*const jsonString = '{"nombre":"Ana","edad":30,"ciudad":"Málaga"}';

const objeto = JSON.parse(jsonString);
console.log(objeto);*/

const persona = {
    nombre: "Ana",
    edad: 25,
    pais: "Argentina"
};

// Serializamos el objeto a JSON
const json = JSON.stringify(persona);
console.log("JSON String:", json);
// Parseamos la cadena JSON de nuevo a objeto
const personaParseada = JSON.parse(json);
console.log("Objeto parseado:", personaParseada);