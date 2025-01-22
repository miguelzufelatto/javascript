let res = document.getElementById("res");

function situation() {
  let nome = window.prompt("Qual é o nome do aluno ?");
  if (nome.trim() === "") {
    alert("Por favor digite um nome.");
    return;
  }
  const n1 = window.prompt(`Primeiro nota de ${nome}:`);
  const n2 = window.prompt(`Segunda nota de ${nome}:`);
  const media = (Number(n1) + Number(n2)) / 2;

  if (media < 3) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${Number(
      n1
    )} e ${Number(
      n2
    )}, a média é ${media}</p><p>Com média abaixo de 3.0, o aluno está REPROVADO</p>`;
  }
  if (media >= 3 && media <= 6) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${Number(
      n1
    )} e ${Number(
      n2
    )}, a média é ${media}</p><p>Com média entre 3.0 e 6.0, o aluno está em RECUPERAÇÃO</p>`;
  }
  if (media > 6) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${Number(
      n1
    )} e ${Number(
      n2
    )}, a média é ${media}</p><p>Com média acima de 6.0, o aluno está APROVADO</p>`;
  }
}

function limpa() {
  res.innerHTML = "";
  res.innerHTML +=
    "<p>Clique no botão acima para informar as notas do aluno.</p>";
}

// CAPITALIZAR NOME
// PERMITIR SOMENTE NUM NAS NOTAS
// PERMITIR VIRGULA NA ENTRADA DE NOTAS
// FORMATAR PARA BR OS NUM
// PERMITIR APENAS UM DEPOIS DA VIRGULA
// ESTILIZAÇÃO
