function converter() {
    let res = window.document.getElementById('res')
    res.innerHTML = ''

    let distM = window.prompt('Digite uma distância em metros (m)')
    let distN = Number(distM)

    if (distN <= 0 || isNaN(distN)) {
        window.alert('Por favor digite uma medida válida')
        return
    }

    let km = (distN / 10**3).toLocaleString('pt-BR')
    let hm = (distN / 10**2).toLocaleString('pt-BR')
    let dam = (distN / 10).toLocaleString('pt-BR')
    let dm = (distN * 10).toLocaleString('pt-BR')
    let cm = (distN * 10**2).toLocaleString('pt-BR')
    let mm = (distN * 10**3).toLocaleString('pt-BR')

    res.innerHTML = `<h2>A distância de ${distN.toLocaleString('pt-BR')} metros, corresponde a... </h2>
    <p>${km} Quilômetros (Km)</p>
    <p>${hm} Hectômetros (Hm)</p>
    <p>${dam} Decâmetros (Dam)</p>
    <p>${dm} Decímetros (Dm)</p>
    <p>${cm} Centímetros (Cm)</p>
    <p>${mm} Milímitros (Mm)</p>
    `
}

//O isNaN() em JavaScript é uma função global que verifica se um valor é NaN (Not-a-Number), ou seja, se o valor não é um número válido. Ela tenta converter o valor para um número e, se não for possível, retorna true. Caso contrário, retorna false.

//isNaN(123);       // false, pois 123 é um número
//isNaN("123");     // false, pois "123" pode ser convertido para número
//isNaN("abc");     // true, pois "abc" não é um número
//isNaN(NaN);       // true, pois é NaN
//isNaN(true);      // false, pois true é convertido para 1
//isNaN(undefined); // true, pois undefined não é um número

//Nota: toFixed() arredonda o número para o número de casas decimais especificado.
//toPrecision(): Limita o número total de dígitos significativos.
//toLocaleString(): Controla a exibição com base no formato regional.
