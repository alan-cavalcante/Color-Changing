function gerarCor() {

    //Pega valores da primeira cor
    let valorR = document.getElementById('rgbR').value
    let valorG = document.getElementById('rgbG').value
    let valorB = document.getElementById('rgbB').value
    //Pega valores da segunda cor
    let incR = document.getElementById('increR').value
    let incG = document.getElementById('increG').value
    let incB = document.getElementById('increB').value

    let corDoQuadro = document.getElementById('quadrocolorido')
    // Seleciona o quadro e junta os valores da primeira cor
    let codigosJuntos = valorR + valorG + valorB
    let codigoFinal = '#' + codigosJuntos

    // Seleciona e junta os valores da segunda cor
    let codigosIncremento = incR + incG + incB
    let valorDoIncremento = '#' + codigosIncremento

    // Seleciona as variáveis CSS de cor e aplica nela as cores 
    let root = document.querySelector(':root')
    root.style.setProperty('--CorAnimation1', codigoFinal)
    root.style.setProperty('--CorAnimation2', valorDoIncremento)

    corDoQuadro.onanimationstart = () => {
        let botao = document.getElementById('startStop')
        botao.setAttribute('onclick', 'desanimar()')
        botao.textContent = 'STOP'
    }

}

function animar() {
    let quadro = document.getElementById('quadrocolorido')
    quadro.classList.add('animar')
    readdonly(1)
}

function readdonly(valor) {
    let inputsSelecionados = document.getElementsByClassName('inputsiniciais')
    if (valor === 1) {
        for (elem of inputsSelecionados) {
            elem.setAttribute('readonly', 'true')
        }
    } else if (valor === 2) {
        for (elem of inputsSelecionados) {
            elem.removeAttribute('readonly')
        }
    }
}

function desanimar() {
    let quadro = document.getElementById('quadrocolorido')
    quadro.classList.remove('animar')
    let botao = document.getElementById('startStop')
    botao.setAttribute('onclick', 'gerarCor(), animar()')
    botao.textContent = 'START'
    readdonly(2)
}