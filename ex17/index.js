// (17) Crie uma função que recebe 2 parâmetros e retorna a soma deles, porem caso seja passado um parâmetro vazio ela retorne zero.


function sominha(num1, num2) {
  if(num1 == null || num2 == null) {
    return 0;
  }else{
    return num1 + num2;
  }
}

const resultado = sominha(32, 57);
const texto = document.querySelector(".recebe-texto");

if(resultado == 0){
texto.textContent = "Um dos números é null, então o resultado é " + resultado;
}else{
  texto.textContent = "A soma dos números é " + resultado;
}
