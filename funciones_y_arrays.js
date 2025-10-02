function saludar(nombre = 5, posicion) {
    return `Hola ${nombre} esta en la posición ${posicion}`
}


function obtenerEnPar(alumno, posicion) {
    return posicion % 2 === 1
}




let alumnos = [
    "John", /* posicion 0  */
    "Brain", /* posicin 1 */
    "Xusana", /* POSICION 2 */
    "Simon",
    "Emiliano", 
    "Richard", 
    "Daniel",
    "Simeon", 
    "Diana", 
    "Yanina",
    "Luis",
    "Sebastian",
    "Santiago"
];

/* Método MAP */
const alumnosSaludados = alumnos.map(
    function (elemento, posicion) {
        return elemento + " " + (posicion + 1)
    }
)

console.log(alumnosSaludados);
console.warn(alumnos);

/* Método FILTER */

const alumnosFiltrados = alumnos.filter(
    obtenerEnPar
)

console.error(alumnos);

/* Método FIND */

const encontrado = alumnos.find(
    function (elemento, indice) {
        console.log(elemento, indice, elemento.endsWith("a"));
        
        return elemento.endsWith("a")
    }
)
console.log("encontrado:",encontrado);

/* Método REDUCE */
const numeros = [1,2,3,4,5]

const sumarTodo = (acumulador, valorActual) => {
    return acumulador + valorActual
}

const resultado = numeros.reduce(
    sumarTodo, 0
)

console.log("resultado de la reducción", resultado);

const resultadoAcumular = alumnos.reduce(
    (listado, alumno) => {
        return listado + "|" + alumno
    }, ""
)

console.warn("Resultado de acumular alumnos:", resultadoAcumular)

console.error("Resultao de unir", "|"+ alumnos.join("|"));


/* Funciones y formas de crearlas */
console.log("sumar"     ,sumar, typeof sumar);
console.warn(sumar3(1,2));

//console.log("sumar2"    ,sumar2, typeof sumar2);
//console.log("sumar3"    ,sumar3, typeof sumar3);
//console.log("cuadrado"  ,cuadrado, typeof cuadrado);



function sumar(a,b){
  return a+b;
  console.log("Hola")
}

var sumar2 = function(x,y){
  return x+y
}

let sumar3 = function (c,d) {
    return c+d
}

let cuadrado = (a) => {
  //console.log(a*a); 
  return a*a
}

const resultadoT = cuadrado(15) - sumar(74,15)
console.log(resultadoT)


