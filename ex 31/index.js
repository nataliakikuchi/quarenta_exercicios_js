// (31) Ok... chega de for(), mentira / #SQN... Exiba a tabuada do 1 até o 10 (for dentro de for?) (caso você escreva de forma manual.. eu vou te bater HSUAHASHUAS)
// 0 x 0 = 0
// 0 x 1 = 0
// 0 x 2 = 0
// ...
// 10 x 9 = 90
// 10 x 10 = 10
// (Dica, pesquise um pouco de CSS para melhorar a visualização do resultado.)

let i = 0;
let j = 0;

for(let i = 0; i <= 10; i++){
  const criaDiv = document.createElement("div");
  document.body.appendChild(criaDiv); 
  criaDiv.classList.add("tabela-tabuada");
  
  const criaUl = document.createElement("ul");
  criaDiv.appendChild(criaUl);
  criaUl.classList.add("lista-tabuada");

  for(let j = 0; j <= 10; j++){
    const criaLi = document.createElement("li");
    criaUl.appendChild(criaLi);
    criaLi.classList.add("item-tabuada");
    
    criaLi.innerHTML = (`${i} * ${j} = ${i * j}`);
  }
}
  