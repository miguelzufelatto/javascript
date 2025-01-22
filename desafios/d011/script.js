function bissexto() {
  const res = document.getElementById("res");

  if (res.innerHTML !== "") {
    alert("Por favor limpe o resultado antes de inserir outro valor.");
    return;
  }

  const a = window.prompt("Qual é o ano que voce quer verificar?");
  const ano = Number(a);
  if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
    res.innerHTML = `<p>O ano de ${ano} <span class="bissexto">É BISSEXTO</span>✅</p>`;
  } else {
    res.innerHTML = `<p>O ano de ${ano} <span class="naobissexto">NÃO É BISSEXTO</span>❌</p>`;
  }
}

function limpa() {
  res.innerHTML = "";
}
