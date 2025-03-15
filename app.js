// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let listaDeAmigos = [];

function agregarAmigo() {
    let ingresarNombre = document.querySelector("input");
    let nombre = ingresarNombre.value;
    
    if (nombre === "") {
        alert("Por favor, inserta a un amigo.");
        return;
    } 
    
    listaDeAmigos.push(nombre);
    ingresarNombre.value = "";
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let amigo of listaDeAmigos) {
        let amigosSeleccionados = document.createElement("li");
        amigosSeleccionados.textContent = amigo;
        lista.appendChild(amigosSeleccionados);
    }
}


function sortearAmigo() {
    if (listaDeAmigos.length <= 2) {
        alert("Ingresa al menos dos de tus amigos.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoGanador = listaDeAmigos[indiceAleatorio];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Tu amigo/a seleccionado es: ${amigoGanador}</li>`;
}

function reiniciarJuego(){
    
    alert("¿Desea reiniciar el juego ahora?");
    location.reload();
    return;

}
