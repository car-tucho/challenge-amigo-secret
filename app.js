//Array para almacenar los nombres
let amigos = [];

//función para agregar amigos
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value
    
    if(amigo === "") {
        alert("Por favor, ingresa un amigo");
        return;
    } else {
        amigos.push(amigo);
    }
    document.getElementById("amigo").value = ""; 
    actualizarListaAmigos();
}
document.querySelector(".button-add").addEventListener("click", agregarAmigo)

//Función para actualizar la lista de amigos
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
    console.log(listaAmigos);

}
document.querySelector(".button-add").addEventListener("click", actualizarListaAmigos)

//función para sortear los amigos
function sortearAmigo() {
    if(amigos == []) {
        alert("No hay amigos para sortear");}
    else {
        let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
        console.log(amigoSecreto)
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "";
        let li = document.createElement("li");
        li.textContent = amigoSecreto;
        resultado.appendChild(li);
    }
}

document.querySelector(".button-draw").addEventListener("click", sortearAmigo)
