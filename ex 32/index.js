// (32) Crie uma função que informa se tem os caracteres 'dota' no parâmetro informado.
// Ex: 'Dota é melhor que LOL' (verdadeiro)
// Ex: 'Lol é melhor que CS' (falso) / e Falso na vida real tmb.

let frase = "Eu não sei o que é Dota";

function temDota(frase){
let resultado = frase.includes("Dota");
if(resultado == true){
  return true;
}else{
  return false;
}
}
temDota(frase);


function countBs(banana) {
  let contadora = 1;
  for(let i = 0; i <= banana.length; i++) {
    if(banana.charAt(i)==banana.charAt(i-1)) {
      contadora++;
    }
  }
 console.log(contadora);
}
countBs("Banana");


function countChar() {

}