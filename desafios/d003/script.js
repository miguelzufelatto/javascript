function antsuc() {
    let n = window.prompt('Digite um número inteiro qualquer')
    if (n == '') {
        window.alert('Por favor digite um número')
        return
    }
    let num = Number(n)
    if (num % 1 !== 0) {
        window.alert('Por favor digite um número inteiro')
        return
    }
    let suc = num + 1
    let ant = num - 1
    window.alert(`Antes de ${num}, temos o número ${ant}.\nDepois de ${num}, temos o número ${suc}.`)
    //window.alert(`Depois de ${num}, temos o número ${suc}`)
}

//!= -> permite a conversão automática de tipos antes de comparar.

//!== -> não permite conversão automática e verifica tanto o valor quanto o tipo.