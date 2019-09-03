// (41) Crie um contador

//Estabelecer o número do qual vamos começar a contagem regressiva
let countDown = 10;

//Atualizar o contador para baixo a cada 1 segundo
const secondDown = setInterval(function() {
  //Pega o número
  const now = 0;
  //Encontra a distância entre o número atual e o número que queremos chegar
  let distance = countDown - now;
  countDown--;

  //Exibe o resultado no elemento com id demo
  document.querySelector("#demo").innerHTML = distance;

  //Se a contagem terminar, exiba
  if(distance < 0) {
    clearInterval(secondDown);
    document.querySelector("#demo").innerHTML = "EXPIRED";
  }
}, 1000);