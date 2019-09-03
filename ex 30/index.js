// (30) Dentro da div com o id 'resultado', escreva os números pares até 20... (ex 2,4,6...20)

let numerosPares = [];
const divVazia = document.querySelector("#resultado");
let i = 0;

for(i = 0; i <= 20; i++) {
  if(i % 2 == 0) {
    numerosPares.push(i);
  }
}

divVazia.innerHTML = numerosPares;
  
