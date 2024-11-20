## **Objetos Nativos de JavaScript**

JavaScript proporciona varios objetos integrados que permiten a los desarrolladores trabajar con diferentes tipos de datos, realizar tareas comunes, manipular el DOM y manejar errores. Estos objetos son parte del lenguaje JavaScript y están disponibles globalmente.

![Objetos Nativos](img/native_objects.png)

Los objetos nativos de JavaScript se pueden categorizar en dos tipos según su contexto de uso y origen:

#### Objetos Independientes del Navegador (También disponibles en Node.js)

Estos objetos son parte de la especificación del lenguaje JavaScript y se pueden usar tanto en el navegador como en entornos del lado del servidor (como Node.js). Generalmente comienzan con una letra mayúscula (y son los marcados en rojo en la figura anterior):

- **Math**: Proporciona constantes y funciones matemáticas.
- **Number**: Representa valores numéricos y proporciona métodos para operaciones numéricas.
- **Date**: Representa fechas y horas.
- **Array**: Representa una colección tipo lista de elementos.

Estos objetos están implementados como parte del propio lenguaje JavaScript y no dependen de la presencia de un entorno de navegador.

#### Objetos Dependientes del Navegador (Entorno del Lado del Cliente)

Estos objetos son específicos del entorno del navegador y no están disponibles en JavaScript del lado del servidor (Node.js). Generalmente comienzan con una letra minúscula:

- **window**: Representa la ventana global del navegador y actúa como el objeto global en JavaScript del lado del cliente.
- **document**: Representa el documento HTML cargado en la ventana del navegador.
- **navigator**: Proporciona información sobre el navegador y el sistema operativo del cliente.
- **localStorage / sessionStorage**: Proporciona mecanismos de almacenamiento dentro del navegador para persistir datos.

Estos objetos interactúan directamente con el Modelo de Objetos del Documento (DOM) del navegador y son esenciales para la programación del lado del cliente y el desarrollo de aplicaciones web.

#### Contextos de Uso

- **Node.js**: Los objetos independientes del navegador (por ejemplo, Math, Number, Date) se pueden usar en aplicaciones Node.js sin dependencia de un entorno de navegador.
- **Navegador**: Los objetos dependientes del navegador (por ejemplo, window, document, navigator) son específicos del entorno del lado del cliente y requieren un navegador web para su ejecución.

Vamos a explicar los más útiles para nosotros en el alcance de este curso.

### **6.1 [Objeto Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)**

- El objeto Date en JavaScript se utiliza para trabajar con fechas y horas.
- Permite crear y manipular fechas, obtener y establecer varios componentes de la fecha (como año, mes, día, hora, minuto, segundo) y realizar operaciones como formato y aritmética.
- Internamente, se almacena el número de milisegundos desde las 00:00:00 UTC del 1 de enero de 1970.

Constructor:

```js
let currentDate = new Date();               // Fecha y hora actuales
let specificDate = new Date(1626176282855); // Ejemplo con número de milisegundos
let customDate = new Date(2023, 5, 12, 14, 30, 0, 0); // 12 de junio de 2023, 14:30:00
```

#### **getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getMilliseconds():** Recupera varios componentes de la fecha.

```js
let now = new Date();
let year = now.getFullYear();
let month = now.getMonth(); // Índice 0 (Enero es 0)
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
```

#### **setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds(), setMilliseconds()**: Establece varios componentes de la fecha.

```js
day = new Date(2000, 0, 1); // 1 de enero de 2000
birthday.setFullYear(2001); // Cambiar el año a 2001
```

#### **toDateString(), toISOString(), toLocaleDateString(), toLocaleTimeString()**: Convierte objetos de fecha en diferentes representaciones de cadena.

```js
let today = new Date();
let dateString = today.toDateString(); // "Tue Jul 13 2024"
let isoString = today.toISOString(); // "2024-07-13T12:30:00.000Z"
let localeDateString = today.toLocaleDateString(); // Depende del local
```

#### Trabajando con fechas

Aquí tienes un ejemplo que muestra cómo crear un objeto `Date`, acceder a sus componentes y formatear su salida:

```js
let now = new Date();

let year = now.getFullYear();
let month = now.getMonth(); // Índice 0 (Julio es 6)
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

console.log(`Fecha y hora actuales: ${day}/${month + 1}/${year} ${hours}:${minutes}:${seconds}`);
```

Aquí está el ejemplo en JavaScript comparando dos fechas:

```js
// Crear dos fechas
let date1 = new Date('2023-07-13');
let date2 = new Date('2023-07-14');

// Comparar las fechas
if (date1 < date2) {
    console.log(`${date1.toDateString()} es antes que ${date2.toDateString()}`);
} else if (date1 > date2) {
    console.log(`${date1.toDateString()} es después de ${date2.toDateString()}`);
} else {
    console.log(`${date1.toDateString()} y ${date2.toDateString()} son iguales`);
}
```

### **6.2 [Objeto Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)**

El objeto Math en JavaScript proporciona constantes y funciones matemáticas, permitiéndote realizar tareas matemáticas sin crear explícitamente una instancia del objeto Math. Incluye métodos para redondeo, trigonometría, logaritmos, exponenciación, algunas constantes como el número PI, y más.

- `Math.abs()`: Valor absoluto
- `Math.ceil()`: Redondeo hacia arriba
- `Math.floor()`: Redondeo hacia abajo
- `Math.round()`: Redondeo al entero más cercano
- `Math.max()`: Valor máximo
- `Math.min()`: Valor mínimo
- `Math.random()`: Número aleatorio entre 0 y 1
- `Math.sqrt()`: Raíz cuadrada
- `Math.PI`: Número PI

```js
let absoluteValue = Math.abs(-5);  // 5
let roundedUp = Math.ceil(4.2);  // 5
let roundedDown = Math.floor(4.8);  // 4
let rounded = Math.round(4.5);  // 5
let roundedDownExample = Math.round(4.4);  // 4
let max = Math.max(1, 2, 3);  // 3
let min = Math.min(1, 2, 3);  // 1
let random = Math.random();  // ej., 0.543
let squareRoot = Math.sqrt(16);  // 4

// Además, el objeto Math contiene algunas constantes útiles como PI o el número E
let piNumber = Math.PI;  // 3.1415......
```




### [**6.4 Objeto String**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

El objeto `String` es un envoltorio alrededor del tipo de dato primitivo string de JavaScript. Proporciona varios métodos y propiedades para trabajar con cadenas de texto de manera efectiva.

#### Creación de Objetos String
En JavaScript, puedes crear una cadena primitiva directamente o usar el constructor del objeto `String` para crear un objeto `String`:

```javascript
// Cadena primitiva
let mensaje = '¡Hola, Mundo!';

// Usando el constructor del objeto String
let otroMensaje = new String('¡Hola, Mundo!');
```

#### Métodos y propiedades útiles

- `length`: Devuelve la longitud de la cadena.
- `charAt(index)`: Devuelve el carácter en el índice especificado.
- `concat(str1, str2, ...)`: Concatena una o más cadenas al final de la cadena que llama al método y devuelve una nueva cadena.
- `toUpperCase()`: Convierte todos los caracteres a mayúsculas.
- `toLowerCase()`: Convierte todos los caracteres a minúsculas.
- `indexOf(searchValue, startIndex)`: Devuelve el índice de la primera aparición de `searchValue` en la cadena, comenzando la búsqueda en `startIndex`.
- `substring(startIndex, endIndex)`: Devuelve una nueva subcadena desde `startIndex` hasta `endIndex` (excluyendo `endIndex`).
- `slice(startIndex, endIndex)`: Extrae una sección de la cadena y la devuelve como una nueva cadena.
- `split(separator)`: Divide la cadena en un array de subcadenas basadas en un `separator` especificado.

Ejemplos de uso:

Estos métodos ya han sido utilizados en el [Tipo de Dato String Primitivo](#42-string-type).

### **6.5 Objetos de Interacción con el Navegador**

Además de los objetos presentados anteriormente, hay otros tipos de objetos que permiten la manipulación de características específicas del navegador:

- **navigator**: Proporciona información sobre el navegador y el sistema operativo del cliente.
- **screen**: Representa las propiedades de la pantalla del usuario.
- **window**: Representa la ventana global del navegador y actúa como el objeto global en JavaScript del lado del cliente.
- **document**: Representa el documento HTML cargado en la ventana del navegador.
- **history**: Proporciona el historial de sesiones del navegador (páginas visitadas en la pestaña/ventana actual).

#### [navigator](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)

Para identificar las características de la plataforma en la que se ejecuta una aplicación web, puedes usar propiedades y métodos proporcionados por el objeto `navigator` en JavaScript:

1. **Tipo de Navegador y Versión**:
    - Usa `navigator.userAgent` para obtener la cadena del User-Agent, que incluye información sobre el tipo de navegador y la versión.

2. **Sistema Operativo**:
    - Usa `navigator.platform` para recuperar la plataforma en la que se está ejecutando el navegador (por ejemplo, "Win32", "Linux x86_64", "MacIntel").

3. **Geolocalización**:
    - Utiliza la API de Geolocalización para solicitar y obtener la ubicación geográfica actual del dispositivo, siempre que el usuario conceda permiso.

   Ejemplo de código JavaScript:
```javascript
// User Agent
let infoNavegador = navigator.userAgent;
console.log(`User-Agent: ${infoNavegador}`);

// Información de la Plataforma
let infoPlataforma = navigator.platform;
console.log(`Plataforma: ${infoPlataforma}`);

// Geolocalización
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
      console.log('Latitud:', position.coords.latitude);
      console.log('Longitud:', position.coords.longitude);
    }, error => {
        console.error('Error al obtener la geolocalización:', error);
    });
} else {
    console.error('La geolocalización no es soportada por este navegador.');
}
```

#### [screen](https://developer.mozilla.org/en-US/docs/Web/API/Window/screen)

El objeto `screen` en JavaScript representa la pantalla del usuario y proporciona propiedades de solo lectura para recuperar información sobre sus características.

#### Propiedades del Objeto `screen`

- **`screen.width`**: Devuelve el ancho de la pantalla del usuario en píxeles.
- **`screen.height`**: Devuelve la altura de la pantalla del usuario en píxeles.
- **`screen.availWidth`**: Devuelve el ancho disponible de la pantalla del usuario (excluyendo las barras de tareas del sistema operativo, etc.) en píxeles.
- **`screen.availHeight`**: Devuelve la altura disponible de la pantalla del usuario (excluyendo las barras de tareas del sistema operativo, etc.) en píxeles.
- **`screen.colorDepth`**: Devuelve la profundidad de color de la paleta para mostrar imágenes en la pantalla del usuario.
- **`screen.pixelDepth`**: Devuelve la profundidad de bits del búfer de píxeles de la pantalla del usuario.

Estas propiedades permiten que las aplicaciones web adapten su contenido o comportamiento en función de las dimensiones y capacidades de la pantalla del usuario, mejorando la experiencia del usuario.

Aquí hay un ejemplo simple que demuestra cómo acceder y usar algunas de estas propiedades en JavaScript:

```javascript
console.log(`Ancho de la pantalla: ${screen.width}px`);
console.log(`Altura de la pantalla: ${screen.height}px`);
console.log(`Ancho disponible de la pantalla: ${screen.availWidth}px`);
console.log(`Altura disponible de la pantalla: ${screen.availHeight}px`);
console.log(`Profundidad de color: ${screen.colorDepth} bits`);
console.log(`Profundidad de píxeles: ${screen.pixelDepth} bits`);
```

#### [window](https://developer.mozilla.org/en-US/docs/Web/API/Window)

El objeto `window` se considera uno de los objetos más importantes en JavaScript por varias razones:

- **Gestión de Ventanas**: Permite gestionar ventanas del navegador y proporciona métodos para manipular e interactuar con ellas.

- **Objeto Implícito**: El objeto `window` es implícito, lo que significa que no necesitas referenciarlo explícitamente para acceder a objetos y propiedades anidados dentro de su jerarquía. Por ejemplo, `window.document` se refiere directamente al objeto `document` sin necesidad de mencionar explícitamente `window`.

#### [document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

El objeto `document` en JavaScript representa la página web actual cargada en la ventana del navegador. Proporciona acceso al DOM (Modelo de Objetos del Documento) de la página, permitiendo a los desarrolladores manipular su contenido, estructura y estilos de manera dinámica.

#### Características Clave del Objeto `document`:

- **Manipulación del DOM**: Los desarrolladores pueden acceder y modificar elementos dentro de la página web usando métodos como `getElementById`, `querySelector` y propiedades como `textContent`, `innerHTML`.

- **Manejo de Eventos**: Permite adjuntar escuchadores de eventos a elementos y responder a interacciones del usuario u otros eventos en la página.

- **Actualizaciones Dinámicas**: Permite a los scripts actualizar dinámicamente el contenido de la página en función de la entrada del usuario, respuestas del servidor u otras condiciones.

##### Ejemplo de Manipulación del DOM:

```javascript
// Accediendo a un elemento por su ID y cambiando su contenido
const elementoEncabezado = document.getElementById('header');
elementoEncabezado.textContent = '¡Bienvenidos a nuestro sitio web!';
```

#### [history](https://developer.mozilla.org/en-US/docs/Web/API/History)

En JavaScript, el objeto `history` proporciona métodos y propiedades para navegar por el historial de navegación del usuario. Permite almacenar referencias a las páginas web visitadas y facilita la navegación entre ellas usando una estructura tipo lista.

##### Características Clave del Objeto `history`:

- **`history.length`**: Devuelve el número de entradas en la pila del historial de navegación.

- **`history.back()`**: Regresa una página en el historial de sesión. Equivalente a hacer clic en el botón de retroceso del navegador.

- **`history.forward()`**: Avanza una página en el historial de sesión. Equivalente a hacer clic en el botón de avance del navegador.

- **`history.go(n)`**: Carga una página específica del historial de sesión, donde `n` puede ser un número entero positivo o negativo. Los valores negativos mueven hacia atrás, y los valores positivos avanzan.

##### Ejemplo de Uso:

```javascript
// Navegando hacia atrás y hacia adelante en el historial
function irAtras() {
    window.history.back();
}

function irAdelante() {
    window.history.forward();
}

// Accediendo a la longitud de la pila del historial
let longitudHistorial = window.history.length;
console.log(`Número de páginas en el historial: ${longitudHistorial}`);
```