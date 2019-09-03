const input1 = document.querySelector("#soma1");

const input2 = document.querySelector("#soma2");

const botao = document.querySelector("#btn-soma");

const inputResultado = document.querySelector("#resultado-soma");


botao.addEventListener('click', function() {
  
  const resultado = parseInt(input1.value) + parseInt(input2.value);
  inputResultado.value = resultado;
});

botao.disabled = true;

let input1Preenchido = false;
let input2Preenchido = false;

input1.addEventListener('keyup', function(eventonoinput){
  
  if(eventonoinput.target.value.length > 0) {
    input1Preenchido = true;
    validaInputs();
  }else{
    input1Preenchido = false;
  }
});

input2.addEventListener('keyup', function(eventonoinput){
  if(eventonoinput.target.value.length > 0) {
    input2Preenchido = true;
    validaInputs();
  }else{
    input2Preenchido = false;
  }
});

function validaInputs() {
  if(input1Preenchido == true && input2Preenchido == true) {
    botao.disabled = false;
  }else{
    botao.disabled = true;
  }
};

/*Comentário de mais de uma linha solicitado no exercício 13.
jsadsahdjhsjdkasd
sdhksahdkjahsjkdd*/