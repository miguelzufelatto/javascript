function tabuada() {
    var n = document.getElementById('txtn')
    var res = document.getElementById('seltab')
    if (n.value.length == 0) {
        window.alert('Por favor, digite um número!')
        return
    } else {
        var v = Number(n.value)
        var c = 1

        res.innerHTML = ''

        while (c <= 10) {
            var item = document.createElement("option")
            item.text = `${v} x ${c} = ${v*c}`
            item.value = `tab${c}`
            res.appendChild(item)
            c++
        }
    }
}

    /*
    for (var c = 1; c <= 10; c++) {
        var resultado = v * c
        var item = document.createElement("option")
        item.text = `${v} x ${c} = ${resultado}`
        res.appendChild(item)
    }
}
    */