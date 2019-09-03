// (18) Exiba o 'resto' da seguinte divisão: (5 / 2)


function restoDivisao(num1, num2) {
  return num1 % num2;
}

const resultado = restoDivisao(32, 57);
const criaDiv = document.createElement("div");
document.body.appendChild(criaDiv);

criaDiv.textContent = "O resto da divisão é " + resultado;