//(26) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com forEach)

let palavras = ["Repetição 1", "Repetição 2", "Repetição 3", "Repetição 4", "Repetição 5"];


function adicionaRepeticao() {
  const divVazia = document.querySelector("#resultado");
  
  palavras.forEach(function(indiceStringDoArray){ //o parâmetro da função forEach sempre se refere a cada item do array, quero executar a função em todos os itens do array, um por um. Sem ordem aleatória.
    //debugger;
    divVazia.innerHTML += indiceStringDoArray; //usamos += para atribuir e somar, pois se usássemos somente = o item seria substituído a cada volta do forEach e o resultado final seria "Repetição 5"
  });
}
adicionaRepeticao();

// for (let index = 0; index < array.length; index++) {
//   const element = array[index]; // mesmo que forEach
//   func(element)
// }

let frutas = ["Uva", "Banana", "Morango"];

function adicionaFrutas() {
  frutas.forEach(function(cadaFruta) {
    console.log(cadaFruta);
  })
}

adicionaFrutas();