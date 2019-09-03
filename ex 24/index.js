//(24) Dentro da div com o id 'resultado', escreva 2x ('Repetição').


function repeteTexto() {
  for(let i = 0; i < 2; i++) {
      document.querySelector("#resultado").innerHTML += "Repetição ";
  }
}

repeteTexto();