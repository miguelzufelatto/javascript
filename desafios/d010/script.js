function calcbhask() {
  let res = document.getElementById("res");

  if (res.innerHTML !== "") {
    alert("Por favor, limpe o resultado antes de calcular novamente.");
    return; // Impede que o cálculo seja feito até que a div seja limpa
  }

  const a = window.prompt("Digite o valor de A:");
  const aN = Number(a);
  if (isNaN(aN)) {
    alert("Por favor digite um valor válido para A");
    return;
  }
  if (aN === 0) {
    alert(
      "Para calcular delta no contexto da fórmula de Bhaskara, A precisa ser diferente de 0!"
    );
    return;
  }

  const b = window.prompt("Digite o valor de B:");
  const bN = Number(b);
  if (isNaN(bN)) {
    alert("Por favor digite um valor válido para B");
    return;
  }
  if (b.trim() === "") {
    alert("Por favor digite um valor válido para B");
    return;
  }

  const c = window.prompt("Digite o valor de C:");
  const cN = Number(c);
  if (isNaN(cN)) {
    alert("Por favor digite um valor válido para B");
    return;
  }
  if (c.trim() === "") {
    alert("Por favor digite um valor válido para C");
    return;
  }

  const delta = bN ** 2 - 4 * a * c;
  res.innerHTML = `
  <p>A equação atual é <strong>${aN}x² + ${bN}x + ${cN} = 0</strong></p>
  <p>O cálculo realizado será <strong>Δ = ${bN}² - 4 . ${aN} . ${cN}</strong></p>
  <p>O valor calculado foi <strong>Δ = ${delta}</strong></p>`;
}

function limpa() {
  let res = document.getElementById("res");
  res.innerHTML = "";
}
