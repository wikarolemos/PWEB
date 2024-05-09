var imagemJanela = document.getElementById('imagemJanela')
var statusJanela = document.getElementById('statusJanela')

function abrirJanela() {
    imagemJanela.src = "imagens/janelaAberta.png"
    statusJanela.innerText = "Janela Aberta"
}

function fecharJanela() {
    imagemJanela.src = "imagens/janelaFechada.png"
    statusJanela.innerText = "Janela Fechada"
}

function quebrarJanela() {
    imagemJanela.src = "imagens/janelaQuebrada.png"
    statusJanela.innerText = "Janela Quebrada"
}

imagemJanela.addEventListener('mouseover', abrirJanela)
imagemJanela.addEventListener('mouseout', fecharJanela)
imagemJanela.addEventListener('click', quebrarJanela)