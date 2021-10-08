// perguntando os nomes dos times e atribuindo às variáveis
const nomeTimeA = prompt('Digite o nome do time A:');
const nomeTimeB = prompt('Digite o nome do time B:');

// buscando os elementos no documento HTML e atribuindo às variáveis
const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setsA_HTML = document.getElementById("setA");
const setsB_HTML = document.getElementById("setB");

// definindo as variáveis de pontuação e sets
let pontoA = 0;
let pontoB = 0;
let setsA = 0;
let setsB = 0;

// definindo o texto interior ao elemento HTML como os que desejamos
nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;
pontoA_HTML.innerText = pontoA; // garantindo que começa com 0
pontoB_HTML.innerText = pontoB; // garantindo que começa com 0

function acrescentaPontoA(){
    pontoA += 1;
    pontoA_HTML.innerText = pontoA; //modifica o valor do texto do html  (o visível)
    verificaSeEhTiebreak();
    verificaFimDoJogo();
    
}

function acrescentaPontoB(){
    pontoB += 1;
    pontoB_HTML.innerText = pontoB;
    verificaSeEhTiebreak();
    verificaFimDoJogo();
    
}

function verificaSeEhTiebreak(){
    // se for tie break, a qtd de pontos para fechar o set é 15, se não, é 21
    if (setsA == 1 && setsB == 1){
        verificaFimDoSet(15);
    }
    else{
        verificaFimDoSet(21);
    }
}

function verificaFimDoSet(pontosMax){
    if (pontoA >= pontosMax && pontoA >= pontoB + 2){
        setsA += 1;
        setsA_HTML.innerText = setsA;
        zeraPlacarDePontos()
    }
    else if (pontoB >= pontosMax && pontoB >= pontoA + 2){
        setsB += 1;
        setsB_HTML.innerText = setsB;
        zeraPlacarDePontos()
    }
}

function zeraPlacarDePontos(){
    pontoA = 0;
    pontoB = 0;
    pontoA_HTML.innerText = pontoB;
    pontoB_HTML.innerText = pontoA;
}

function verificaFimDoJogo(){
    if (setsA === 2){
        alert("O time " + nomeTimeA + " ganhou por " + setsA + " sets a " + setsB + "!");
        location.reload() // recarrega a página para ir ao próximo jogo
    }
    else if (setsB === 2){
        alert("O time " + nomeTimeB + " ganhou por " + setsB + " sets a " + setsA + "!");
        location.reload()
    }
}

// saber do click nesse elemento e chamar uma função nele (sem () na função!)
pontoA_HTML.addEventListener("click", acrescentaPontoA);
pontoB_HTML.addEventListener("click", acrescentaPontoB);