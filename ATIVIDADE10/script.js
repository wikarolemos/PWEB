// 1)
function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3)
}

// 2)
function ordenarNumeros(num1, num2, num3) {
    return [num1, num2, num3].sort((a, b) => a - b)
}

// 3)
function ePalindromo(str) {
    str = str.toUpperCase()
    return str === str.split('').reverse().join('')
}

// 4)
function tipoTriangulo(lado1, lado2, lado3) {
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 == lado2 && lado2 == lado3) {
            return "Sim, Equilátero"
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            return "Sim, Isósceles"
        } else {
            return "Sim, Escaleno"
        }
    } else {
        return "Não. Os lados fornecidos não formam um triângulo."
    }
}

num1 = Number(prompt("Digite o primeiro número:"))
num2 = Number(prompt("Digite o segundo número:"))
num3 = Number(prompt("Digite o terceiro número:"))
str = prompt("Digite uma texto:")

alert(
    "O maior número é: " + maiorNumero(num1, num2, num3) + "\n" +
    "Os números em ordem crescente são: " + ordenarNumeros(num1, num2, num3) + "\n" +
    "A string é um palíndromo? " + (ePalindromo(str) ? "Sim" : "Não") + "\n" +
    "Os números formam um triângulo? " + tipoTriangulo(num1, num2, num3)
)