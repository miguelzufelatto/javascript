let res = document.getElementById("res");

function situation() {
  let nome = window.prompt("Qual é o nome do aluno ?");
  nome = nome.trim();
  if (nome === "") {
    alert("Por favor digite um nome.");
    return;
  }

  const capitalize = (str) => `${str[0].toUpperCase()}${str.substr(1)}`;
  nome = nome.split(" ").map(capitalize).join(" ");

  let n1 = window.prompt(`Primeiro nota de ${nome}:`);
  n1 = n1.replace(",", ".");
  const nota1 = Number(n1);
  if (isNaN(nota1)) {
    alert("Por favor digite um número.");
    return;
  }

  let n2 = window.prompt(`Segunda nota de ${nome}:`);
  n2 = n2.replace(",", ".");
  const nota2 = Number(n2);
  if (isNaN(nota2)) {
    alert("Por favor digite um número.");
    return;
  }

  const media = (nota1 + nota2) / 2;

  if (media < 3) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${nota1} e ${nota2}, a média é ${media}</p><p>Com média abaixo de 3.0, o aluno está REPROVADO</p>`;
  }
  if (media >= 3 && media <= 6) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${nota1} e ${nota2}, a média é ${media}</p><p>Com média entre 3.0 e 6.0, o aluno está em RECUPERAÇÃO</p>`;
  }
  if (media > 6) {
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2><p>Com as notas de ${nota1} e ${nota2}, a média é ${media}</p><p>Com média acima de 6.0, o aluno está APROVADO</p>`;
  }
}

function limpa() {
  res.innerHTML = "";
  res.innerHTML +=
    "<p>Clique no botão acima para informar as notas do aluno.</p>";
}

// PARTÍCULAS DOS NOMES
// FORMATAR PARA BR OS NUM
// PERMITIR APENAS UM DEPOIS DA VIRGULA
