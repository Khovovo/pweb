function Retangulo(x, y){
	var base = x;
	var altura = y;
	
	this.Area = function(){
		return(base * altura);
	}
}

var objRetangulo1 = new Retangulo(7,13);
alert("A área do retângulo com\nBase =7 \nAltura = 13 \nÉ igual a área de: " + objRetangulo1.Area());


function Conta(){
	var nomeCorrentista;
	var banco;
	var numeroDaConta;
	var saldo;
	
	this.getNomeCorrentista = function(){
		return nomeCorrentista;
	}
	this.setNomeCorrentista = function(value){
		nomeCorrentista = value
	}
	this.getBanco = function(){
		return banco;
	}
	this.setBanco = function(value){
		banco = value
	}
	this.getNumeroDaConta = function(){
		return numeroDaConta;
	}
	this.setNumeroDaConta = function(value){
		numeroDaConta = value
	}
	this.getSaldo = function(){
		return saldo;
	}
	this.setSaldo = function(value){
		saldo = value
	}
}

function Corrente(){
	var saldoEspecial;
	this.getSaldoEspecial = function(){
		return saldoEspecial;
	}
	this.setSaldoEspecial = function(value){
		saldoEspecial = value
	}
}

function Poupanca(){
	var juros;
	var dataVencimento
	
	this.getJuros = function(){
		return juros;
	}
	this.setJuros = function(value){
		juros = value
	}
	this.getDataVencimento = function(){
		return dataVencimento;
	}
	this.setDataVencimento = function(value){
		dataVencimento = value
	}
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

var objCorrente = new Corrente();
var objPoupanca = new Poupanca();

objCorrente.setNomeCorrentista("Lola Aiade");
objCorrente.setBanco("1 Banco do Brasil");
objCorrente.setNumeroDaConta("59607-0");
objCorrente.setSaldo(4000);
objCorrente.setSaldoEspecial(6000);

alert("Conta Corrente \nNome do Correntista: " + objCorrente.getNomeCorrentista() + 
"\nBanco: " + objCorrente.getBanco() + 
"\nNúmero da Conta: " + objCorrente.getNumeroDaConta() + 
"\nSaldo: R$ " + objCorrente.getSaldo() + 
"\nSaldo Especial: R$ " + objCorrente.getSaldoEspecial());


objPoupanca.setNomeCorrentista("Tah Benmaut");
objPoupanca.setBanco("237 Bradesco");
objPoupanca.setNumeroDaConta("15885-X");
objPoupanca.setSaldo(4500);
objPoupanca.setJuros("0.7%");
objPoupanca.setDataVencimento("20/05/24");

alert("Conta Poupança \nNome do Correntista: " + objPoupanca.getNomeCorrentista() + 
"\nBanco: " + objPoupanca.getBanco() + 
"\nNúmero da Conta: " + objPoupanca.getNumeroDaConta() + 
"\nSaldo: R$ " + objPoupanca.getSaldo() + 
"\nJuros: "  + objPoupanca.getJuros() + 
"\nData de Vencimento: " + objPoupanca.getDataVencimento());
