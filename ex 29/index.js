// (29) Dentro da div com o id 'resultado', escreva os números de 0 ~ 10 (escolha uma dos exercícios anteriores)

let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function adicionaNumeros() {
  const divVazia = document.querySelector("#resultado");
  numeros.forEach(function(i) {
    divVazia.innerHTML += i;
  })
}

adicionaNumeros();