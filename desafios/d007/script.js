let c = window.prompt('Qual é o valor do dólar atual?')

if (c) {
    let cotnum = Number(c);
    if (!isNaN(cotnum) && cotnum > 0) {
        let reais = window.prompt('Quantos R$ o senhor(a) possui?'); 
            if (reais) {
                let rnum = Number(reais);
                if (!isNaN(rnum) && rnum >= 0) {
                    let res = rnum / cotnum  
                    let conteudo = document.getElementById('conteudo');
                    conteudo.style.display = 'block';  
                    let divres = document.getElementById('res')
                    divres.innerHTML = (`<h3>O senhor(a) possui ${res.toLocaleString('pt-br')} US$</h3>`)
                } else {
                    alert('Por favor, insira um valor válido para reais.');
                }
            } else {
                alert('Você não informou o valor em reais.');
            }
    } else {
        alert('Por favor, insira uma cotação válida.');
    }
} else {
    alert('Você não informou a cotação do dólar.');
}

window.onload = conversor;
