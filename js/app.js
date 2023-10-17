let listaAmigos = [];
let verificador = false;

function adicionar() {

    // Coletar o nome digitado
    let nome = document.getElementById("nome-amigo").value;
    console.log(nome);
    //Verificar se o nome já não está na lista
    let textoNomes = document.getElementById("lista-amigos");
    for (let i = 0; i < listaAmigos.length; i++) {
        if (nome == listaAmigos[i]) {
            alert("Nome já adicionado!");
            verificador = true;
        }      
    }
    // Adicionar a lista de amigos
    if (verificador == false) {
        // Mostrar a lista no campo Amigos incluídos
        if (textoNomes.textContent == "") {
            textoNomes.textContent = nome;
        }
        else {
            textoNomes.textContent = textoNomes.textContent + ", " + nome;
        }
        listaAmigos.push(nome);
    }
    verificador = false;
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    // Embaralhar lista
    console.log(listaAmigos);
    let listaEmbaralhada = embaralharLista(listaAmigos);
    console.log(listaEmbaralhada);
    // 0>1 1>2 2>3 3>4 4>0
    for (let i = 0; i < listaEmbaralhada.length; i++) {
        let sorteioAmigos = document.getElementById("lista-sorteio");
        if (i == listaEmbaralhada.length - 1) {
            sorteioAmigos.innerHTML =  sorteioAmigos.innerHTML + `<p>${listaEmbaralhada[i]} -> ${listaEmbaralhada[0]}</p>`
            console.log(`${listaEmbaralhada[i]} -> ${listaEmbaralhada[0]}`)
        } else {
            sorteioAmigos.innerHTML = sorteioAmigos.innerHTML + `<p>${listaEmbaralhada[i]} -> ${listaEmbaralhada[i + 1]}</p>`
        console.log(`${listaEmbaralhada[i]} -> ${listaEmbaralhada[i + 1]}`)
        }
    }
}

// Função para embaralhar lista
function embaralharLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [lista[i] , lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}

function reiniciar() {
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    listaAmigos = [];
}