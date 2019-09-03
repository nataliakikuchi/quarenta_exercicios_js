const nomeCompleto = document.querySelector(".full-name");
const clicarBotao = document.querySelector(".showfullname");

clicarBotao.addEventListener('click', function() {
  alert(`O nome completo é ${nomeCompleto.value}`); //interpolação de string faz o mesmo que concanetar
})