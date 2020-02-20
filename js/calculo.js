/*
Desenvolvidor por: Camila Santos
Data: 20/02/2020
Processo Seletivo: Sistema de Caixa Eletrônico
*/

/*A função realiza o cálculo do valor digitado pelo usuário pelo valor da nota em real, sendo assim resultando na quantidade de notas emitidas 
para cada valor. Para esse caso utilizamos um Array e um For para calcular a qtd de cada nota.
 */
function Caixa(){
	var saque = document.getElementById('valor_saque').value;
	var notas = [100,50,20,10];
	var result = " Realizando a operação:<br>Quantidade de notas" + "<br>";
	var bool = false;
	for (i = 0; i < notas.length; i++) {
		if ((saque % 10) == 0 ){
			if (saque >=notas[i]) {
				result = result  + parseInt (saque/notas[i])+" Nota(s) de R$:"+notas[i] + "<br>";
				bool = true;
				saque = saque % notas[i];
			}
		} else {
			/*Se o valor informado não for inteiro, o sistema de caixa não poderá imprimir pois não haverá notas de 
			R$1,00 , R$2,00 e R$5,00.*/
			bool = false;
			break;
		}
	}
	if (bool == true) {
		document.getElementById("texto").innerHTML = result;
	}
	else {
		document.getElementById("texto").innerHTML = "O valor informado não é possível para saque! Pois não temos notas de R$1,00, R$2,00 e 5,00 reais.";
	}
}

/*Limpa campos*/
function Limpar(){
	document.getElementById('valor_saque').value='';
	document.getElementById("texto").innerHTML ="";
}
