// (39) Crie um campo texto no html que armazena o conteúdo em um array sempre que você clicar no botão, e apresente em uma lista(ul)

let listinhaDeDoces = ['Balinha', 'Sorvete', 'Bolinho', 'Pudim'];
const criaDiv = document.createElement("div");
const criaUl = document.createElement("ul");
criaDiv.appendChild(criaUl);

const pegaBotao = document.querySelector(".btn");

let contadora = 0;

function addItem() {
  const criaLi = document.createElement("li");
  criaLi.textContent = listinhaDeDoces[contadora];
  criaUl.appendChild(criaLi);

  // quando atingir o comprimento do array desabilite o botão
  
  contadora++;
  if(contadora < listinhaDeDoces.length){
    document.body.appendChild(criaDiv);
  } else {
      pegaBotao.setAttribute("disabled", true);
  }
}