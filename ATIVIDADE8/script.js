totalPessoas = 45
pessoas = new Array(totalPessoas)

for(var i = 0; i < totalPessoas; i++) {
    var idade = prompt("Digite a idade da pessoa " + (i+1) + ":");
    var sexo = prompt("Digite o sexo da pessoa " + (i+1) + " (M para masculino, F para feminino):");
    var opiniao = prompt("Digite a opinião da pessoa " + (i+1) + " (1 a 4):");

    pessoas[i] = {
        idade: Number(idade),
        sexo: sexo, 
        opiniao: Number(opiniao)
    }
}

totalIdade = 0
idadeMaxima = pessoas[0].idade
idadeMinima = pessoas[0].idade
totalPessimo = 0
totalOtimoBom = 0
totalHomens = 0
totalMulheres = 0

for(pessoa of pessoas) {
    totalIdade += pessoa.idade
    idadeMaxima = Math.max(idadeMaxima, pessoa.idade)
    idadeMinima = Math.min(idadeMinima, pessoa.idade)
    if(pessoa.opiniao === 1) totalPessimo++
    if(pessoa.opiniao >= 3) totalOtimoBom++
    if(pessoa.sexo === 'M') totalHomens++
    if(pessoa.sexo === 'F') totalMulheres++
}

mediaIdade = totalIdade / pessoas.length
porcentagemOtimoBom = (totalOtimoBom / pessoas.length) * 100

alert(`
Média de idade: ${mediaIdade}
Idade da pessoa mais velha: ${idadeMaxima}
Idade da pessoa mais nova: ${idadeMinima}
Quantidade de pessoas que responderam péssimo: ${totalPessimo}
Porcentagem de pessoas que responderam ótimo e bom: ${porcentagemOtimoBom}%
Número de homens que responderam ao questionário: ${totalHomens}
Número de mulheres que responderam ao questionário: ${totalMulheres}
`)