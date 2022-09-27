dinheiroTotal=50.00
var precos=new Array() //preço dos suplementos
precos[0]=0.20 //maionese
precos[1]=0.20 //catchup
precos[2]=0.20 //mostarda
precos[3]=0.50 //salsicha
precos[4]=0.40 //hamburguer
precos[5]=0.40 //prato
precos[6]=0.97 //pao


suplements=new Array() //quantidade
suplements[0]=20
suplements[1]=20
suplements[2]=20
suplements[3]=20
suplements[4]=20
suplements[5]=20
suplements[6]=20


function buySupplement(numb){ /* funçao  compra de suplementos. 
--------------------------------------------------
O numb ? a id do suplemento. para comprar um suplemento
por linha de comando (pela barra de endereço atraves de javascript:buySupplement(1);void(0);), devera substituir o numb pela id do suplemento.*/

	if(dinheiroTotal > precos[numb]){ //se tiver dinheiro
	suplements[numb]+=1//comprado um suplemento
	dinheiroTotal-=precos[numb]//dinheiro subtraido
	}
	else { //se nao tiver dinheiro
	alert("você não tem dinheiro suficiente para comprar este suplemento/objeto")//janela de alerta dando a explicação
	}
}
pessoasnafila=0 //vari?vel de pessoas na fila
function aumentaFila(){ /* funçao aumentaFila()
*/
var continua = Math.round(Math.random()) // resposta do script em relaçao a deixar que uma pessoa chegue..
	if(continua == 1){ //se a resposta for sim
	pessoasnafila=pessoasnafila+(Math.round(Math.random()*1)) //aumenta pessoas da fila para +1
	}
setTimeout("aumentaFila()",(Math.round(Math.random()*800)+400));//timer (!)
}
function vendeCachorroQuente(){ /* funçao de vender um cachorro quente (hnnnnn. :p)
A funcao e executada quando voce clica no botao vender um cachorro quente
*/
passeVende=true //elemento do script (bloqueador)
	for(o=0;o<7;o++){
		if(suplements[o] < 0){ //se nao se tem suplementos 
		passeVende=false //ativa o bloqueador
		}
	}
	if(passeVende == true){ //se o bloqueador acima estiver desativado
		if(pessoasnafila > 0){ //se tiver pessoas na fila 
			for(o=0;o<7;o++){
				suplements[o]-=1 //pega um suplemento para fazer o lanche
			}
		dinheiroTotal+=2.94//retorna o lucro 
		pessoasnafila-=1//a pessoa vai embora 
		}
		else {
		
		}
	}
	else {// se o bloqueador estiver ativado
	alert("você não tem suplemento(s) suficiente(s)"); //janela de explicaçao
	}
}
function atualiza(){
dinheiroLique=dinheiroTotal.toString();
	if(dinheiroLique.indexOf(".") != -1){
	dinheiro.innerHTML="R$ "+dinheiroLique.substring(0,dinheiroLique.indexOf(".")+3);
	}
	else {
	dinheiro.innerHTML="R$ "+dinheiroTotal+".00";
	}

pessoasNaFila.innerHTML=pessoasnafila
	for(i=0;i<7;i++){
	document.all["elm"+i].innerHTML=suplements[i];
	}

setTimeout("atualiza()",10)
}
atualiza()
aumentaFila()