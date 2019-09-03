// ((37.f) Crie o seguinte array: var numbers = [5, 7, 1, 8, 9]
// E exiba de forma crescente @dica: .sort
// @dica2: http://pt.stackoverflow.com/questions/9900/como-ordenar-um-array-por-valores

let numeros = [87, 56, 94, 36, 82, 7, 8];

numeros.sort(function(a, b){
  return a-b
});

console.log(numeros);

//Parameter Values compareFunction

// Opcional. Uma função que define uma ordem de classificação alternativa. A função deve retornar um valor negativo, zero ou positivo, dependendo dos argumentos, como:
// função (a, b) {return a-b}
// Quando o método sort () compara dois valores, ele envia os valores para a função de comparação e classifica os valores de acordo com o valor retornado (negativo, zero, positivo).

// Exemplo:

// Ao comparar 40 e 100, o método sort () chama a função de comparação (40,100).

// A função calcula 40-100 e retorna -60 (um valor negativo).

// A função sort classificará 40 como um valor menor que 100.