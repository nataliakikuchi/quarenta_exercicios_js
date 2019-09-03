// (40) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul) destacando os números pares

let numeros = [];
const criaDiv = document.createElement("div");
const criaUl = document.createElement("ul");
criaDiv.appendChild(criaUl);

const pegaBotao = document.querySelector(".btn");
const pegaInput = document.querySelector(".recebe-numero");

function addItem() {
  const criaLi = document.createElement("li");
  criaUl.appendChild(criaLi);
  const valorInput = pegaInput.value;
  if(valorInput % 2 == 0){
    numeros.push(valorInput);
  }else{
    alert("Esse número não é par");
  }
  criaLi.textContent = valorInput;
  document.body.appendChild(criaDiv);
}

console.log(numeros);