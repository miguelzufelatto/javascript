function conversor() {
    let c = window.prompt('Digite uma temperatura em °C (Celsius)')
    let cnumber = Number(c)
    let k = cnumber + 273.15
    let f = (c * 1.8) + 32
    let res = document.getElementById('res')
    res.innerHTML = (`<p>A temperatura de ${cnumber.toLocaleString('pt-br')}°C, corresponde a...</p> ${k.toLocaleString('pt-br')}°K (Kelvin) <br><br> ${f.toLocaleString('pt-br')}°F (Fahrenheit)`)
}