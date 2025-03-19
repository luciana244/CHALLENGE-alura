//  una lista para almacenar los nombres de los amigos 
let amigos = [];


function agregarAmigo() {
    
    let nombre = document.getElementById('nombreInput').value.trim(); 


    if (nombre === '') {
      
        alert('Por favor, inserte un nombre.');
        return; 
    }

    // agregarlo ala lista
    amigos.push(nombre);

    
    document.getElementById('nombreInput').value = '';

   
    actualizarListaAmigos();
}


function actualizarListaAmigos() {
   
    let lista = document.getElementById('listaNombres');

    lista.innerHTML = '';

   
    for (let i = 0; i < amigos.length; i++) {
       
        let li = document.createElement('li');
        li.textContent = amigos[i]; 
       
        lista.appendChild(li);
    }
}

// 
function sortearAmigo() {
    
    if (amigos.length === 0) {
    
        alert('No hay amigos para sortear. Por favor ingresa al menos un nombre.');
        return; 
    }

     
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById('resultadoSorteo').innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}

document.getElementById('adicionarBtn').addEventListener('click', agregarAmigo);

document.getElementById('sorteoBtn').addEventListener('click', sortearAmigo);