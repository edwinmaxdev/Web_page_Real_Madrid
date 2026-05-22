const buscador = document.getElementById("buscadorJugadores");
const jugadores = document.querySelectorAll(".player-card");

buscador.addEventListener("input", () => {

    let texto = buscador.value.toLowerCase();

    jugadores.forEach(jugador => {

        let nombre = jugador.querySelector("h3").textContent.toLowerCase();

        if(nombre.includes(texto)){
            jugador.style.display = "block";
        }else{
            jugador.style.display = "none";
        }

    });

});