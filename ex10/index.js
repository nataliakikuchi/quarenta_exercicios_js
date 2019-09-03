// const input1 = document.querySelector("#soma1");

// const input2 = document.querySelector("#soma2");

// const botao = document.querySelector("#btn-soma");

// const inputResultado = document.querySelector("#resultado-soma");


// botao.addEventListener('click', function() {
  
//   const resultado = parseInt(input1.value) + parseInt(input2.value);
//   inputResultado.value = resultado;
// });

// botao.disabled = true;

// let input1Preenchido = false;
// let input2Preenchido = false;

// input1.addEventListener('keyup', function(eventonoinput){
//   console.log("oi");
//   if(eventonoinput.target.value.length > 0) {
//     input1Preenchido = true;
//     validaInputs();
//   }else{
//     input1Preenchido = false;
//   }
// });

// input2.addEventListener('keyup', function(eventonoinput){
//   console.log("olo");
//   if(eventonoinput.target.value.length > 0) {
//     input2Preenchido = true;
//     validaInputs();
//   }else{
//     input2Preenchido = false;
//   }
// });

// function validaInputs() {
//   if(input1Preenchido == true && input2Preenchido == true) {
//     botao.disabled = false;
//   }else{
//     botao.disabled = true;
//   }
// };







function sominha(num1, num2) {
  return parseInt(num1) + parseInt(num2);

}

const input1 = document.querySelector("#soma1");

const input2 = document.querySelector("#soma2");

const botao = document.querySelector("#btn-soma");

const inputResultado = document.querySelector("#resultado-soma");


botao.addEventListener('click', function() {
  
  inputResultado.value = sominha(input1.value, input2.value);
});

botao.disabled = true;

let input1Preenchido = false;
let input2Preenchido = false;

input1.addEventListener('keyup', function(eventonoinput){
  console.log("oi");
  if(eventonoinput.target.value.length > 0) {
    input1Preenchido = true;
    validaInputs();
  }else{
    input1Preenchido = false;
  }
});

input2.addEventListener('keyup', function(eventonoinput){
  console.log("olo");
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

