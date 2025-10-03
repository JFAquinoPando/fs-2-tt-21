const pokemon = {
    nombre: "Snorlax",
    imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    nivel: 0,
    subir() {
        this.nivel = this.nivel + 1
    },
    bajar: function () {
        this.nivel = this.nivel - 1
    },
    devolverThis() {
        console.log("Estoy aquí... alguien me escucha?", this);
        return this
    },
    flecha: () => { return this }
}



console.log("Ver que tiene la propiedad nombre", pokemon.nombre);
console.log("nivel", pokemon.nivel);
pokemon.subir();
pokemon.subir();
console.error("nuevo nivel", pokemon.nivel);
pokemon.subir();
console.warn("nuevo nivel", pokemon.nivel);
pokemon.bajar()
pokemon.bajar()
console.error("nuevo nivel", pokemon.nivel);
console.log("pokemon", pokemon);
/* console.log("Veo el this", pokemon.devolverThis()); */
console.log("Arrow Function (Función que parece una flecha):", pokemon.flecha());



const procesador = {
    datos: [1, 2, 3],
    procesarAsync() {
        console.log("Hola.... soy el this de la función procesarAsync", this);
        
        // una función de flecha SI sería útil dentro de un método (como callback):
        // 'this' aquí se refiere a 'procesador'
        setTimeout(() => {
            // Dentro de la función de flecha, 'this' sigue refiriéndose a 'procesador
            // porque la hereda del contexto léxico de 'procesarAsync'.
            console.log(`Datos procesados: ${
                this.datos.map(function (d) {
                    return d * 2
                    }
                )
            }`);
        }, 5000);
    }
};

procesador.procesarAsync()


/* Método keys */
console.log("Ver las claves",Object.keys(pokemon));
console.log("Ver los valores",Object.values(pokemon));






