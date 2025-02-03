let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Insira um nome válido");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(nome => {
        const li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois participantes para realizar o sorteio");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSecreto === amigos[i]);
        
        resultado.push(`${amigos[i]} → ${amigoSecreto}`);
        sorteio = sorteio.filter(nome => nome !== amigoSecreto);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = "";
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}
