function checarRegEx(valor, id) {
    const valoresHex = new RegExp('^(0x|0X)?[a-fA-F0-9]+$')
    if (!valoresHex.test(valor)) {
        window.alert("Deve ser inserido um valor entre 0-9 e A-F")
        document.getElementById(id).textContent = ""
    }
}

function gerarCor() {

    // Pega valores da primeira cor
    let valorR = document.getElementById('rgbR').value
    let valorG = document.getElementById('rgbG').value
    let valorB = document.getElementById('rgbB').value
    // Pega valores da segunda cor
    let incR = document.getElementById('increR').value
    let incG = document.getElementById('increG').value
    let incB = document.getElementById('increB').value
    // Seleciona o quadro e junta os valores da primeira cor
    let corDoQuadro = document.getElementById('quadrocolorido')
    let codigosJuntos = valorR + valorG + valorB
    let codigoFinal = '#' + codigosJuntos

    // Seleciona e junta os valores da segunda cor
    let codigosIncremento = incR + incG + incB
    let valorDoIncremento = '#' + codigosIncremento

    // Seleciona as variáveis CSS de cor e aplica nela as cores 
    let root = document.querySelector(':root')
    root.style.setProperty('--CorAnimation1', codigoFinal)
    root.style.setProperty('--CorAnimation2', valorDoIncremento)

    // Ao iniciar a animação, muda o atributo e o texto do botão
    corDoQuadro.onanimationstart = () => {
        let botao = document.getElementById('startStop')
        botao.setAttribute('onclick', 'desanimar()')
        botao.textContent = 'STOP'
    }
}

// Adiciona à div do quadro a classe que a anima juntamente com a velocidade escolhida pelo usuário.
function animar() {
    let quadro = document.getElementById('quadrocolorido')
    let valorvelo = document.getElementById('velocidade').value
    quadro.classList.add('animar')
    quadro.style.setProperty('animation-duration', valorvelo)
    readdonly(1)
}

// Bloqueia o acesso aos inputs de valor enquanto a animação está rodando.
function readdonly(valor) {
    let inputsSelecionados = document.getElementsByClassName('inputsiniciais')
    if (valor === 1) {
        for (elem of inputsSelecionados) {
            elem.setAttribute('readonly', 'true')
            elem.style.border = '1px red solid'
            elem.style.backgroundColor = 'gray'
        }
    } else if (valor === 2) {
        for (elem of inputsSelecionados) {
            elem.removeAttribute('readonly')
            elem.style.border = '0px'
            elem.style.backgroundColor = '#E29780'
        }
    }
    // console.log(inputsSelecionados)
}

// Remove a classe que anima o quadro e volta as propriedades do botão para os valores iniciais.
function desanimar() {
    let quadro = document.getElementById('quadrocolorido')
    quadro.classList.remove('animar')
    let botao = document.getElementById('startStop')
    botao.setAttribute('onclick', 'gerarCor(), animar()')
    botao.textContent = 'START'
    readdonly(2)
}