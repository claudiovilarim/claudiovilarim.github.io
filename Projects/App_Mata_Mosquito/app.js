let width =window.innerWidth ;
let height =window.innerHeight ;
let vidas = 1;
let tempo = 15;

let nivel = window.location.search;
nivel = nivel.replace('?', '');

let tempoDoMosquito = 4000;

if (nivel == 'facil'){
  tempoDoMosquito = 2000;
}else{
  if (nivel == 'normal'){
    tempoDoMosquito = 1500;
  }else{
    if (nivel == 'dificil'){
      tempoDoMosquito = 1000;
    }else{
      if (nivel == 'chucknorris'){
        tempoDoMosquito = 720;
      }else{
        //tempoDoMosquito = 5000;
      }
    }
  }
}
let dificuldade = nivel;

function ajustaTamanhoPalcoJogo(){
  let width =window.innerWidth ;
  let height =window.innerHeight ;
  console.log(width, height);
}

// Cronometro do jogo
let cronometro = setInterval(function(){
  tempo -= 1;

  if(tempo < 0){
    clearInterval(cronometro); // Eliminando a função setInterval da memória da aplicação.
    clearInterval(criarMosquito); // Fazendo o jogo parar após vencer o jogo.
    window.location.href = 'vitoria.html';
  }else{
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);



function posicaoRandomica(){

  // removendo o mosquito anterior caso exista.
  if ( document.getElementById('mosquito') ){ //Verificando se esse elemento existe.
    document.getElementById('mosquito').remove();
    //removeCoracao(); // Deixando o coração vazio caso o usuário não clique no mosquito.
    if (vidas > 3){
      window.location.href = 'fim_do_jogo.html';
    }else{
      document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";
      vidas++;
    }
  }

  // Definindo a posição randômica para o mosquito
  let posicaoX = Math.floor(Math.random() * (width)) -90;
  let posicaoY = Math.floor( Math.random() * (height)) -90;

  // Evitando bug do mosquito fora da tela.
  if(posicaoX <= 0){
    posicaoX += 95;
  }
  if(posicaoY <= 0){
    posicaoY += 95;
  }

  //console.log(posicaoX, posicaoY);
  
  // Criando o elemento HTML.
  let mosquito = document.createElement('img');
  mosquito.src = 'imagens/mosquito.png';
  mosquito.className = tamanhoAleatorio(); // Esta classe define o tamanho do mosquito
  mosquito.style.transform = ladoAleatório(); // Esta classe define o lado do mosquito
  mosquito.style.position = 'absolute';
  mosquito.style.left = posicaoX + 'px';
  mosquito.style.top = posicaoY + 'px';
  mosquito.id = 'mosquito';
  mosquito.onclick = function (){
    this.remove()
  }
  
  document.body.appendChild(mosquito);  
}

// Define o tamanho que o mosquito será exibido (1, 2 ou 3).
function tamanhoAleatorio(){
  let classe = Math.ceil(Math.random() * 3);
  //console.log('tamanho:' + classe);
  if (classe == 1){ return 'mosquito1'}
  if (classe == 2){ return 'mosquito2'}
  if (classe == 3){ return 'mosquito3'}
}

// Define o lado em que o mosquito será exibido (normal ou invertido).
function ladoAleatório(){
  let lado = Math.ceil(Math.random() * 2);
  //console.log ('lado:' + lado);
  if (lado == 1){ return 'scaleX(1)'};
  if (lado == 2){ return 'scaleX(-1)'};
}

function iniciarJogo(){
  let nivel = document.getElementById('nivel').value;
  
  if (nivel == ''){
    alert ('Selecione um nível para iniciar o jogo!');
  }else{
    location.href='app.html' + '?' + nivel;
    
  }
  
}
















