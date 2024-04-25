// 1
function Retangulo(base, altura) {
    this.base = base
    this.altura = altura
    this.CalculaAreaRetangulo = function () {
        return (base * altura)
    }
}

var base = prompt("Digite a base: ")
var altura = prompt("Digite a altura: ")
var retangulo = new Retangulo(base, altura)
alert(`A área do retângulo é: ${retangulo.CalculaAreaRetangulo()}`)

// 2
class Conta {
    constructor() {
        this.nome_correntista
        this.banco
        this.numero_conta
        this.saldo
    }

    setNomeCorrentista(value) {
        this.nome_correntista = value
    }
    getNomeCorrentista() {
        return this.nome_correntista
    }
    setBanco(value) {
        this.banco = value
    }
    getBanco() {
        return this.banco
    }
    setNumeroConta(value) {
        this.numero_conta = value
    }
    getNumeroConta() {
        return this.numero_conta
    }
    setSaldo(value) {
        this.saldo = value
    }
    getSaldo() {
        return this.saldo
    }
}

class Corrente extends Conta {
    constructor() {
        super()
        this.saldo_especial
    }
    
    setSaldoEspecial(value) {
        this.saldo_especial = value
    }
    getSaldoEspecial() {
        return this.saldo_especial
    }
}

var objCorrente = new Corrente()
objCorrente.setNomeCorrentista(prompt("DIGITE O SEU NOME (CONTA CORRENTE): "))
objCorrente.setBanco(prompt("DIGITE O SEU BANCO (CONTA CORRENTE): "))
objCorrente.setNumeroConta(prompt("DIGITE O NÚMERO DA SUA CONTA (CONTA CORRENTE): "))
objCorrente.setSaldo(prompt("DIGITE O SEU SALDO (CONTA CORRENTE): "))
objCorrente.setSaldoEspecial(prompt("DIGITE O SEU SALDO ESPECIAL (CONTA CORRENTE): "))

alert(`
NOME: ${objCorrente.getNomeCorrentista()} 
\nBANCO: ${objCorrente.getBanco()}
\nNÚMERO CONTA: ${objCorrente.getNumeroConta()}
\nSALDO: ${objCorrente.getSaldo()}
\nSALDO ESPECIAL: ${objCorrente.getSaldoEspecial()}
`)

class Poupanca extends Conta {
    constructor() {
        super()
        this.juros
        this.data_vencimento
    }
    
    setJuros(value) {
        this.juros = value
    }
    getJuros() {
        return this.juros
    }
    setDataVencimento(value) {
        this.data_vencimento = value
    }
    getDataVencimento() {
        return this.data_vencimento
    }
}

var objPoupanca = new Poupanca()
objPoupanca.setNomeCorrentista(prompt("DIGITE O SEU NOME (CONTA POUPANÇA): "))
objPoupanca.setBanco(prompt("DIGITE O SEU BANCO (CONTA POUPANÇA): "))
objPoupanca.setNumeroConta(prompt("DIGITE O NÚMERO DA SUA CONTA (CONTA POUPANÇA): "))
objPoupanca.setSaldo(prompt("DIGITE O SEU SALDO (CONTA POUPANÇA): "))
objPoupanca.setJuros(prompt("DIGITE O JUROS (CONTA POUPANÇA): "))
objPoupanca.setDataVencimento(prompt("DIGITE A DATA DE VENCIMENTO (CONTA POUPANÇA): "))

alert(`
NOME: ${objPoupanca.getNomeCorrentista()} 
\nBANCO: ${objPoupanca.getBanco()}
\nNÚMERO CONTA: ${objPoupanca.getNumeroConta()}
\nSALDO: ${objPoupanca.getSaldo()}
\nJUROS: ${objPoupanca.getJuros()}
\nDATA VENCIMENTO: ${objPoupanca.getDataVencimento()}
`)