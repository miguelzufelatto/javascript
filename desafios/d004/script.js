function compra() {
    let produto = window.prompt('Que produto voce está comprando?')

    let preco = window.prompt(`Quanto custa ${produto} que voce está comprando?`)

    if (preco <= 0) {
        window.alert('Por favor informe um preço válido')
        return
    }

    let pagamento = window.prompt(`Qual foi o valor que voce deu para pagar ${produto}?`)

    if (pagamento < preco) {
        window.alert('Senhor(a), o valor exato do produto precisa ser pago para que possamos concluir a transação.')
        return
    }

    let troco = pagamento - preco
    window.alert(`Voce comprou ${produto} que custou R$ ${preco}\nDeu R$ ${pagamento} em dinheiro e vai receber R$ ${troco}.\nVolte Sempre!`)
}