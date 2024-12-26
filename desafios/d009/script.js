function reajuste() {
  let res = window.document.getElementById("res");
  let nome = window.prompt("Qual é nome do funcionário?");
  if (nome == 0) {
    window.alert("Por favor insira um nome");
    return;
  }
  let sal = window.prompt(`Qual é o salário de ${nome}`);
  sal.replace(",", ".");
  if ((sal = "" | (sal <= 0))) {
    window.alert("Por favor insira um salário válido");
    return;
  }
  let salN = Number(sal);

  let porcento = window.prompt(
    `O salário de ${nome} vai ser reajustado em qual porcentagem?`
  );
  if ((porcento = "" | (porcento <= 0))) {
    window.alert("Por favor insira um salário válido");
    return;
  }
  let porcentoN = Number(porcento);

  let porcentsal = salN / (porcentoN / 100);
  let novosal = porcentsal + salN;
  res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2> 
  <p>O salário atual era ${salN}</p> 
  <p>Com um aumento de ${porcentoN}%, o salário vai aumentar R$ ${porcentsal} no próximo mês</p> 
  <p>E a partir daí, ${nome} vai passar a ganhar R$ ${novosal}</p>`;
}
