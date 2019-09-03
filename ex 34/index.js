// (34) Agora faça um botão que ao clicar nele informa se a pessoa acertou o número.

let numero = 8;

const pegaBotao = document.querySelector(".btn");
const pegaInput = document.querySelector(".campo");

pegaBotao.addEventListener('click', function() {
  if(pegaInput.value == 8) {
    alert("Você acertou o número secreto");
  }else{
    alert("Você errou o número secreto")
  }
});