function bissexto() {
  const res = document.getElementById("res");
  const a = window.prompt("Qual é o ano que voce quer verificar?");
  const ano = Number(a);

  if (isNaN(ano)) {
    alert("Por favor digite um número válido");
    return;
  }

  if (res.style.display === "none" || res.style.display === "") {
    res.style.display = "block"; // Mostra a div
  }

  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    res.innerHTML = `<p>O ano de ${ano} <span class="bissexto">É BISSEXTO</span>✅</p>`;
  } else {
    res.innerHTML = `<p>O ano de ${ano} <span class="naobissexto">NÃO É BISSEXTO</span>❌</p>`;
  }
}

function limpa() {
  res.style.display = "none";
}

// CONDICIONAR A PAG FICAR SEM ROLAMENTO NO CELL P TALVEZ TROCAR A POSIÇÃO DO BOTÃO DE LIMPAR
// if (res.innerHTML !== "") {
//   alert("Por favor limpe o resultado antes de inserir outro valor.");
//   return;
// }
