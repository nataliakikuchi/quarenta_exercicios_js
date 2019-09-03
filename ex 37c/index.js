// (37.c) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder']
// E exiba um a um com alert() - De preferencia para funções com callbacks, Ex:(map, reduce, filter)

let deuses = ['Aegir', 'Aud', 'Balder'];

function showMap() {
  deuses.map(function(itemDoArray) {
    alert(itemDoArray);
  });
};

showMap();


//map mapeia de um array para outro. Map retorna um array.

//COM FILTER filtra os itens do array

let series = ['got', 'twd', 'bb', 'anne with an e'];

function filtraSeries() {
  const filtrado = series.filter(function(serieDoArray) {
    return serieDoArray !== 'twd';
  })

  return filtrado;
}

const seriesFiltradas = filtraSeries();
alert(seriesFiltradas);

//COM REDUCE os dados se juntam para formar outra coisa. Reduce é como se fosse um for-loop

let nomes = ['Aegir', 'Aud', 'Balder', 'Sorvete', 'Balinha', 'Pudim'];

const reduzir = nomes.reduce((inicial, palavra) => inicial + palavra);

alert(reduzir);


//volta 1 inicial 'Aegir' e palavra 'Aud'
//volta 2 inicial 'AegirAud' e palavra 'Balder'
//volta 3 inicial 'AegirAudBalder' e palavra 'Sorvete'
//e assim até percorrer todos os itens do array

// OUTRO EXEMPLO COM REDUCE:
// var euros = [29.76, 41.85, 46.5]; 
// var sum = euros.reduce( function(total, amount){
//   return total + amount
// });
// sum // 118.11