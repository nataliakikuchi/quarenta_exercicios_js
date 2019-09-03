//(25) Dentro da div com o id 'resultado', escreva 20x ('Repetição'). (use o 'for' pelo amor de Deus)


function repeteTexto() {
  for(let i = 0; i < 20; i++) {
      document.querySelector("#resultado").innerHTML += "Repetição ";
  }
}

repeteTexto();