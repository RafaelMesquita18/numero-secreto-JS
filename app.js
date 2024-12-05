alert('Bem vindo ao nosso jogo do numero secreto'); // alerte seria o msgbox
let numeroMaximo = 4000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
//let numeroSecreto = 10; // para definir um valor para a variavel é utilizado o let
console.log('o numero secreto é'+numeroSecreto); // console.log vc consegue deixar alguns logs na parte de inpeção de codigo do navegador
//let chute = prompt('Digite um numero entre 1 e 100'); // prompt nesse caso estamos capturando o valor digitado na caixa do prompet
let chute; // definindo variavel como vazia
console.log('o numero digitado foi' + chute);
let tentativas = 1;


// para compara variaveis igual utilizamos == utilizar apenas um entende que vc esta atribuindo
// para concaternar valores podemos usar 'texto' + variavel ou `` ${variavel}

// != diferente   == igual >maior

while( chute != numeroSecreto){
    chute = prompt (`Digite um numero entre  1 e ${numeroMaximo}`);

    if(chute == numeroSecreto){
       
        break;
    }else {
        if(chute > numeroSecreto){
        alert (' O numero secreto é menor que o chute'+chute) ;  
        }else{
            alert('O numero secreto é maior que '+chute);
        }
      // tentativas = tentativas +1
      tentativas++;
        //console.log('o numero secreto '+ numeroSecreto +' e o valor do chute '+chute+' esta diferente')
    }
  
}

// é o mesmo que o if comentado abaixo mas de forma resumida
let palavraTentativa = tentativas >1 ? 'tentativas' : 'tentativa';
alert(`Isso ai ! Voce descobriu o nosso numero secreto (${numeroSecreto}) apos ${tentativas} ${palavraTentativa}`);


//if(tentativas > 1){
//    alert(`Isso ai ! Voce descobriu o nosso numero secreto (${numeroSecreto}) apos ${tentativas} tentativa`);
//}else{
//    alert(`Isso ai ! Voce descobriu o nosso numero secreto (${numeroSecreto}) apos ${tentativas} tentativas`);
//}



