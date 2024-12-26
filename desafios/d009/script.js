function reajuste() {
  let res = window.document.getElementById("res");
  let nome = window.prompt("Qual é nome do funcionário?");
  if (nome == 0) {
    window.alert("Por favor insira um nome");
    return;
  }
  let sal = window.prompt(`Qual é o salário de ${nome}`);
  sal = sal.replace(",", ".");
  let salN = Number(sal);
  if (isNaN(salN) | (sal <= 0)) {
    window.alert("Por favor insira um salário válido");
    return;
  }
  let porcento = window.prompt(
    `O salário de ${nome} vai ser reajustado em qual porcentagem?`
  );
  porcento = porcento.replace(",", ".");
  let porcentoN = Number(porcento);
  if (isNaN(porcentoN) | (porcentoN <= 0)) {
    window.alert("Por favor insira um salário válido");
    return;
  }
  let porcentsal = salN * (porcentoN / 100);
  let novosal = porcentsal + salN;
  res.innerHTML = `<h2>${nome.toLocaleString(
    "pt-BR"
  )} recebeu um aumento salarial!</h2> 
  <p>O salário atual era ${salN.toLocaleString("pt-BR")}</p> 
  <p>Com um aumento de ${porcentoN.toLocaleString(
    "pt-BR"
  )}%, o salário vai aumentar R$ ${porcentsal.toLocaleString(
    "pt-BR"
  )} no próximo mês</p> 
  <p>E a partir daí, ${nome.toLocaleString(
    "pt-BR"
  )} vai passar a ganhar R$ ${novosal.toLocaleString("pt-BR")}</p>`;
}
