function dadospreco() {
  const res = document.getElementById("res");

  const pant = window.prompt("Qual era o preço anterior do produto?");
  const pantN = Number(pant);
  if (isNaN(pantN)) {
    alert("Por favor digite um número.");
    return;
  }

  if (pantN < 0) {
    alert("Por favor digite um valor positivo.");
    return;
  }

  const patual = window.prompt("Qual era o preço atual do produto?");
  const patualN = Number(patual);

  if (isNaN(patualN)) {
    alert("Por favor digite um número.");
    return;
  }

  if (pantN === patualN) {
    alert(
      "Os valores fornecidos são iguais, por favor forneça valores diferentes."
    );
    return;
  }

  res.innerHTML = "<h2>Analisando os valores informados</h2>";
  res.innerHTML += `<p>O produto custava R$${pantN.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} e agora custa R$${patualN.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}.</p>`;

  if (pantN < patualN) {
    res.innerHTML += "<p>Hoje o produto está mais caro.</p>";
  }
  if (pantN > patualN) {
    res.innerHTML += "<p>Hoje o produto está mais barato.</p>";
  }

  const difpreco = pantN - patualN;
  if (difpreco < 0) {
    res.innerHTML += `<p>O preço subiu R$${Math.abs(difpreco).toLocaleString(
      "pt-br",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )} em relação ao preço anterior.</p>`;
  }
  if (difpreco > 0) {
    res.innerHTML += `<p>O preço caiu R$${Math.abs(difpreco).toLocaleString(
      "pt-br",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )} em relação ao preço anterior.</p>`;
  }

  const vp = ((patualN - pantN) / pantN) * 100;
  if (vp > 0) {
    res.innerHTML += `<p>Uma variação de ${Math.abs(vp).toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}% para cima.</p>`;
  } else {
    res.innerHTML += `<p>Uma variação de ${Math.abs(vp).toLocaleString(
      "pt-BR",
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )}% para baixo.</p>`;
  }
}

function limpa() {
  res.innerHTML = "";
}
