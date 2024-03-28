num1 = prompt("Digite o número 1")
num2 = prompt("Digite o número 2")

soma = parseFloat(num1) + parseFloat(num2)
subtracao = parseFloat(num1) - parseFloat(num2)
produto = parseFloat(num1) * parseFloat(num2)
divisao = parseFloat(num1) / parseFloat(num2)
resto = parseFloat(num1) % parseFloat(num2)

alert("Número 1 = " + num1 + " e " + "Número 2 = " + num2 +
    "\n\nSoma: " + soma.toFixed(2) +
    "\nSubstração: " + subtracao.toFixed(2) +
    "\nProduto: " + produto.toFixed(2) + 
    "\nDivisão: " + divisao.toFixed(2) +
    "\nResto da Divisão: "  + resto.toFixed(2)
)