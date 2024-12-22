function desconto() {
  let res = window.document.getElementById("res");
  let produto = window.prompt("Qual é o produto que voce está comprando?");
  if (produto == 0 || !isNaN(produto)) {
    window.alert("Por favor insira um nome de produto válido.");
    return;
  }
  let preco = window.prompt(`Qual é o preço de ${produto}?`);
  preco = preco.replace(",", ".");
  let precoN = Number(preco);
  if (precoN <= 0 || isNaN(precoN)) {
    window.alert("Por favor insira um preço válido");
    return;
  }
  let desconto = precoN * 0.1;
  let novopreco = precoN - desconto;
  res.innerHTML = `<h2>Calculando desconto de 10% para ${produto.toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}</h2> <br>
    <p>O preço original era R$ ${precoN.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}</p>
    <p>Voce acaba de ganhar R$ ${desconto.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} de desconto (-10%)</p>
    <p>No fim, voce vai pagar R$ ${novopreco.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })} no produto ${produto.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}</p>`;
}
