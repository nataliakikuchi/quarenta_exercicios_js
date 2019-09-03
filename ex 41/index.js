// (41) Crie um contador

//Estabelecer a data da qual vamos começar a contagem regressiva
const countDownDate = new Date("July 10, 2019 22:37:57").getTime();

//Atualizar o contador para baixo a cada 1 segundo
const secondDown = setInterval(function() {
  //Pega a data e horário atuais
  const now = new Date().getTime();
  //Encontra a distância entre a data atual e a data da contagem
  const distance = countDownDate - now;
  //Calcula o tempo em dias, horas, minutos e segundos
  let days = Math.floor(distance / (1000 * 60 * 60 *24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Exibe o resultado no elemento com id demo
  document.querySelector("#demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds +"s ";

  //Se a contagem terminar, exiba
  if(distance < 0) {
    clearInterval(secondDown);
    document.querySelector("#demo").innerHTML = "EXPIRED";
  }
}, 1000);