// (27) Dentro da div com o id 'resultado', escreva 5x ('Repetição'). (agora com while)

let palavras = ["Repetição", "Repetição", "Repetição", "Repetição", "Repetição"];
let i = 0;
const divVazia = document.querySelector("#resultado");
let texto = "";

while(palavras[i]) { //o while executa algo enquanto a condição for true (percorra enquanto palavras[i] for alguma coisa quando chegar no palavras[5] será undefined)
  texto += palavras[i];
  i++;
}

divVazia.innerHTML = texto;
