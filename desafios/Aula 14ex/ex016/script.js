// Quando a página é carregada, adiciona um evento de clique ao botão "Conta"
window.onload = function() {
    document.getElementById("btnConta").addEventListener("click", conta);
};

function conta() {
    // Captura os valores diretamente como strings para verificar se estão vazios
    var i = document.getElementById('inicio').value;
    var f = document.getElementById('fim').value;
    var p = document.getElementById('passo').value;

    var res = document.getElementById('res');
    res.innerHTML = "Contando: "; // Define o texto inicial

    // Verifica se algum dos campos está vazio
    if (i === "" || f === "" || p === "") {
        res.innerHTML = "Impossível contar...";
        return; // Sai da função caso algum campo esteja vazio
    }

    // Converte os valores para números após a verificação
    i = Number(i);
    f = Number(f);
    p = Number(p);

    if (p <= 0) {
        alert("Passo inválido! Considerando passo 1.");
        p = 1;
    } 

    if (i < f) {
        // Contagem crescente
        for (var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`; // Usando emoji de seta para direita
        }
    } else {
        // Contagem regressiva
        for (var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`; // Usando emoji de seta para direita
        }
    }
    
    res.innerHTML += "\u{1F3C1}"; // Emoji de bandeira no final da contagem
}
