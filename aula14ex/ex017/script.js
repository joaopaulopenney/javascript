function contar() {
    var Inicio = window.document.querySelector('input#ini')
    var Fim = window.document.querySelector('input#fim')
    var Passo = window.document.querySelector('input#pas')
    var Resposta = window.document.querySelector('div#res')
    Inicio = Number(Inicio.value)
    Fim = Number(Fim.value)
    Passo = Number(Passo.value)
    if (Inicio == 0 || Fim == 0) {
        Resposta.innerHTML = ('Impossível contar!')
    } else if (Passo == 0) {
        alert('Passo inválido!. Considerando passo 1')
    } else {
        for (var c = Inicio;c <= Fim; c += Passo) {
            Resposta.innerHTML = (c)
        }
    }  
}