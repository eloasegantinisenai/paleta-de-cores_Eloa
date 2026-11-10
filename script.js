let tela = document.querySelector("#tela-de-pintura");/*É um comando do JS para buscar um elemento dentro do seu HTML... utilizando as mesmas regras de seleção que usamos no CSS.*/
let corAzul = document.querySelector("#pincel-azul");
let corVermelho = document.querySelector("#pincel-vermelho");
let corAmarelo = document.querySelector("#pincel-amarelo");
let corRosa = document.querySelector("#pincel-rosa");
let corRoxo = document.querySelector("#pincel-roxo");
let corLaranja = document.querySelector("#pincel-laranja");
let corVerde = document.querySelector("#pincel-verde");
let corMarrom = document.querySelector("#pincel-marrom");
let corPreto = document.querySelector("#pincel-preto")

corAzul.addEventListener("click", azul);
corVermelho.addEventListener("click", vermelho);
corAmarelo.addEventListener("click", amarelo);
corRosa.addEventListener("click", rosa);
corRoxo.addEventListener("click", roxo);
corLaranja.addEventListener("click", laranja);
corVerde.addEventListener("click", verde);
corMarrom.addEventListener("click", marrom);
corPreto.addEventListener("click", preto);
let nomeCor = document.querySelector("h3");

function azul(){
    tela.style.background = "blue";
    nomeCor.innerHTML = "Azul";/*É uma propriedade de elementos HTML no JS usada para ler e alterar todo o conteúdo de uma tag.*/
}
function vermelho(){
    tela.style.background = "red";
    nomeCor.innerHTML = "Vermelho";
}
function amarelo(){
    tela.style.background = "yellow";
    nomeCor.innerHTML = "Amarelo";
}
function rosa(){
    tela.style.background = "pink";
    nomeCor.innerHTML = "Rosa";
}
function roxo(){
    tela.style.background = "purple";
    nomeCor.innerHTML = "Roxo";
}
function laranja(){
    tela.style.background = "orange";
    nomeCor.innerHTML = "Laranja";
}
function verde(){
    tela.style.background = "green";
    nomeCor.innerHTML = "Verde";
}
function marrom(){
    tela.style.background = "brown";
    nomeCor.innerHTML = "Marrom";
}
function preto(){
    tela.style.background = "black";
    nomeCor.innerHTML = "Preto";
}