# Documentación del Proyecto

Este repositorio contiene ejemplos prácticos de JavaScript enfocados en el manejo de **funciones**, **objetos**, **arrays** y el concepto de **hoisting**. A continuación, se describe el propósito de cada archivo y los conceptos clave que se abordan.

## Archivos y Descripción

- **ej1.js**
  - Demuestra cómo reordenar un array utilizando otro array de posiciones.
  - Incluye una función personalizada `ordernar` para reorganizar elementos.
  - Ejemplo de acceso a elementos por índice y manipulación de arrays.

- **funciones_y_arrays.js**
  - Ejemplos de funciones declaradas de diferentes formas: declaración tradicional, expresión y función flecha.
  - Uso de métodos de arrays: `map`, `filter`, `find`, `reduce`, y `join`.
  - Ejemplo de función con parámetros por defecto.
  - Demostración de cómo acumular valores y filtrar elementos en arrays.
  - Se observa el concepto de **hoisting** en funciones declaradas (pueden ser llamadas antes de su declaración).

- **listados.js**
  - Ejemplo de manipulación de arrays con métodos como `push`, `fill`, y `at` (acceso por índice negativo).
  - Muestra cómo agregar objetos a un array y cómo acceder a elementos fuera del rango.

- **objetos.js**
  - Definición y uso de objetos literales.
  - Métodos dentro de objetos, incluyendo funciones tradicionales y funciones flecha.
  - Uso de `this` en métodos y diferencias entre funciones tradicionales y flechas.
  - Ejemplo de asincronía con `setTimeout` y el uso de funciones flecha para mantener el contexto de `this`.
  - Uso de `Object.keys` y `Object.values` para obtener claves y valores de un objeto.

- **index.html**
  - Archivo HTML básico que carga el archivo `objetos.js` y muestra un mensaje en la página.

## Conceptos Clave

### Funciones
- Declaración tradicional, expresión y función flecha.
- Parámetros por defecto.
- Uso de funciones como callbacks en métodos de arrays.
- **Hoisting**: Las funciones declaradas con la palabra clave `function` pueden ser llamadas antes de su declaración en el código.

### Arrays
- Métodos: `map`, `filter`, `find`, `reduce`, `join`, `push`, `fill`, `at`.
- Manipulación de elementos y reordenamiento usando índices.
- Acumulación y filtrado de datos.

### Objetos
- Definición de objetos literales con propiedades y métodos.
- Uso de `this` en métodos.
- Diferencias entre funciones tradicionales y flechas dentro de objetos.
- Obtención de claves y valores con `Object.keys` y `Object.values`.

### Hoisting
- El **hoisting** es el comportamiento por el cual las declaraciones de funciones y variables son "elevadas" al inicio de su contexto de ejecución.
- En este proyecto, se observa que las funciones declaradas pueden ser llamadas antes de su definición, mientras que las expresiones de función y funciones flecha no.

---

Este proyecto es ideal para comprender los fundamentos de JavaScript en cuanto a funciones, arrays, objetos y el comportamiento del hoisting.
