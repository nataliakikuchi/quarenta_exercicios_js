// (28) Dentro da div com o id 'resultado', escreva algo. (agora com while)

let palavrasParaDentroDiv = ["Oi, ", "estou ", "aprendendo ", "JavaScript", "!!!"];
let i = 0;
const criaDiv = document.createElement("div");
document.body.appendChild(criaDiv);
criaDiv.classList.add("resultado");
const divVazia = document.querySelector(".resultado");
let insereTexto = "";

while(palavrasParaDentroDiv[i]) { //o while executa algo enquanto a condição for true (percorra enquanto palavrasParaDentroDiv[i] for alguma coisa quando chegar no palavras[5] será undefined)
  insereTexto += palavrasParaDentroDiv[i];
  i++;
}

divVazia.innerHTML = insereTexto;
