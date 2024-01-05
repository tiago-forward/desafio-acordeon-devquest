const perguntas = document.querySelectorAll(".perguntas")
const respostas = document.querySelectorAll(".resposta")
const setas = document.querySelectorAll(".seta")
let perguntaAtual = ''

perguntas[0].addEventListener("click", function () {
    perguntaAtual = 0

    if (respostas[1].classList.contains("resp-aberto") || respostas[2].classList.contains("resp-aberto")){
        respostas[1].classList.remove("resp-aberto")
        respostas[2].classList.remove("resp-aberto")
        respostas[1].classList.add("resp-fechado")
        respostas[2].classList.add("resp-fechado")
        setas[1].classList.remove("seta-aberta")
        setas[2].classList.remove("seta-aberta")
        setas[1].classList.add("seta-fechada")
        setas[2].classList.add("seta-fechada")
    }
    mostrarOuEsconderResposta()
    acendarOuApagarSeta()
})

perguntas[1].addEventListener("click", function () {
    perguntaAtual = 1

    if (respostas[0].classList.contains("resp-aberto") || respostas[2].classList.contains("resp-aberto")){
        respostas[0].classList.remove("resp-aberto")
        respostas[2].classList.remove("resp-aberto")
        respostas[0].classList.add("resp-fechado")
        respostas[2].classList.add("resp-fechado")
        setas[0].classList.remove("seta-aberta")
        setas[2].classList.remove("seta-aberta")
        setas[0].classList.add("seta-fechada")
        setas[2].classList.add("seta-fechada")
    }
    mostrarOuEsconderResposta()
    acendarOuApagarSeta()
})

perguntas[2].addEventListener("click", function () {
    perguntaAtual = 2

    if (respostas[0].classList.contains("resp-aberto") || respostas[1].classList.contains("resp-aberto")){
        respostas[0].classList.remove("resp-aberto")
        respostas[1].classList.remove("resp-aberto")
        respostas[0].classList.add("resp-fechado")
        respostas[1].classList.add("resp-fechado")
        setas[0].classList.remove("seta-aberta")
        setas[1].classList.remove("seta-aberta")
        setas[0].classList.add("seta-fechada")
        setas[1].classList.add("seta-fechada")
    }
    mostrarOuEsconderResposta()
    acendarOuApagarSeta()
})

function acendarOuApagarSeta() {
    if (setas[perguntaAtual].classList.contains("seta-fechada")) {
        setas[perguntaAtual].classList.remove("seta-fechada")
        setas[perguntaAtual].classList.add("seta-aberta")
    } else if (setas[perguntaAtual].classList.contains("seta-aberta")) {
        setas[perguntaAtual].classList.remove("seta-aberta")
        setas[perguntaAtual].classList.add("seta-fechada")
    }
}

function mostrarOuEsconderResposta() {
    if (respostas[perguntaAtual].classList.contains("resp-fechado")) {
        respostas[perguntaAtual].classList.remove("resp-fechado")
        respostas[perguntaAtual].classList.add("resp-aberto")
    } else if (respostas[perguntaAtual].classList.contains("resp-aberto")) {
        respostas[perguntaAtual].classList.remove("resp-aberto")
        respostas[perguntaAtual].classList.add("resp-fechado")
    }
}

