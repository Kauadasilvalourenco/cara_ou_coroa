var botaoJogar = document.querySelector("input#botao_jogar")
botaoJogar.addEventListener("click", jogar)

function jogar() {
    var cara = "Cara".toUpperCase()
    var coroa = "Coroa".toUpperCase()
    var opcoes = ["Cara", "Coroa"]
    var escolhaComputador = Math.floor(Math.random() * opcoes.length)
    var jogadaComputador = opcoes[escolhaComputador].toUpperCase()

    if (jogadaComputador == cara) {
        resultado.innerHTML = `O RESULTADO É: <strong>${jogadaComputador}</strong>`
    }
    else {
        resultado.innerHTML = `O RESULTADO É: <strong>${jogadaComputador}</strong>`
    }
}