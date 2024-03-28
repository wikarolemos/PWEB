var aluno = prompt("Qual é o seu nome?")

media = 0.0

for (i = 1; i <= 3; i++) {
    var nota = prompt("Qual é a sua nota " + i + "?")

    media = media + parseFloat(nota)
}

media = media / 3

alert("Aluno: " + aluno + "\nSua média aritmética é: " + media.toFixed(2))