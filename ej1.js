const juguetes = ["pelota", "carros", "libro", "rompecabezas"]
/*               [ 0        ,1,        2,       3            ] */
const posiciones = 
                 [3,        1,         2,       0            ]

/*  ya ordenado
["rompecabezas", "carros", "libro", "pelota" ]
*/

console.log(
    "juguete:",
    juguetes[posiciones[0]],
    "| posiciones:",
    posiciones[0]

);

















/* 
["rompecabezas", "carros", "libro", "pelota" ]
*/

const ordenados = ordernar(juguetes, posiciones)

console.log({
    ordenados
});


function ordernar(games, indices) {
    let resuelto = [];
    for (let x = 0; x < juguetes.length; x++) {
       resuelto[indices[x]] = games[x];
    }                           
    return resuelto;
}
