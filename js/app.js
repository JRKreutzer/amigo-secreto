let listaAmigos = [];


function adicionar() {

    let verificador = false;
    let alertaErroNome = false;

    // Coletar o nome digitado
    let nome = document.getElementById("nome-amigo").value;
    console.log(nome);
    //Verificar se o nome já não está na lista ou se o nome não esta vazio
    let textoNomes = document.getElementById("lista-amigos");
    
    if (listaAmigos.includes(nome) || nome == "") {
        alert("Nome repetido/inválido!");
        document.getElementById("nome-amigo").value = "";
        return;
    }      
    
    
    // Mostrar a lista no campo Amigos incluídos
    if (textoNomes.textContent == "") {
            textoNomes.textContent = nome;
    }
    else {
        textoNomes.textContent = textoNomes.textContent + ", " + nome;
    }
    // Adicionar a lista de amigos
    listaAmigos.push(nome);
    
    document.getElementById("nome-amigo").value = "";
}

function sortear() {
    document.getElementById("lista-sorteio").textContent = "";
    if (listaAmigos.length < 3) {
        alert("Número de nomes insuficiente para o sorteio, adicione pelo menos 3 amigos!");
    } else {
        // Embaralhar lista
        console.log(listaAmigos);
        let listaEmbaralhada = embaralharLista(listaAmigos);
        console.log(listaEmbaralhada);
        // 0>1 1>2 2>3 3>4 4>0
        let sorteioAmigos = document.getElementById("lista-sorteio");
        for (let i = 0; i < listaEmbaralhada.length; i++) {
            if (i == listaEmbaralhada.length - 1) {
                sorteioAmigos.innerHTML =  sorteioAmigos.innerHTML + `<p>${listaEmbaralhada[i]} -> ${listaEmbaralhada[0]}</p>`
                console.log(`${listaEmbaralhada[i]} -> ${listaEmbaralhada[0]}`)
            } else {
                sorteioAmigos.innerHTML = sorteioAmigos.innerHTML + `<p>${listaEmbaralhada[i]} -> ${listaEmbaralhada[i + 1]}</p>`
            console.log(`${listaEmbaralhada[i]} -> ${listaEmbaralhada[i + 1]}`)
            }
        }
    }
}

// Função para embaralhar lista
function embaralharLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i] , lista[j]] = [lista[j], lista[i]];
    }
    return lista;
}

function reiniciar() {
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    listaAmigos = [];
}