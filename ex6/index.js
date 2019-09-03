const clicarBotao = document.querySelector(".turnonlight");
const lightOn = "assets/img/acesa.png"; 
const lightOff = "assets/img/apagada.jpg";
const image = document.querySelector(".lightimage");
let luzAcesa = false; //toggle

clicarBotao.addEventListener('click', function() {
  luzAcesa = !luzAcesa; //a cada clique o valor da variável é invertido

  if(luzAcesa == true) {
    image.src=lightOn;
  }else{
    image.src=lightOff;
  }
})