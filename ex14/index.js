const divVazia = document.querySelector("#resultado");

window.addEventListener('DOMContentLoaded', function(){
  var timeOut = setTimeout(function(){
    clearTimeout(timeOut); // quando executamos a primeira vez
    divVazia.textContent = "Eu sou um texto vindo do JavaScript";
  }, 3000)
console.log(timeOut, "oi");  
});

//quando utilizamos o método setTimeOut e o usuário faz várias chamadas, essas chamadas se encavalam dependendo do tempo de espera definido como argumento. Então, declaramos a variável timeOut que será utilizada para cancelar os processos encavalados e executar somente a última chamada.