// (19) Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro inteiro.


function retornaParOuImpar(num) {
  if(num % 2 == 0 && num.isInteger == true){
    return "Par";
  }else if(num % 2 !== 0 && num.isInteger == true) {
    return "Impar"
  }else{
    return "não inteiro."
  }
};

const resultado = retornaParOuImpar(3.6);
const criaUl = document.createElement("ul");
document.body.appendChild(criaUl);

criaUl.classList.add("my-list");

const criaLi = document.createElement("li");
criaUl.appendChild(criaLi);

criaLi.textContent = "Esse número é " + resultado;