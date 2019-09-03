



// function soma(){
  
//   const botao = document.querySelector("#btn-soma");
  
//   botao.addEventListener('click', function(){
//     const input1 = document.querySelector("#soma1");
    
//     const input2 = document.querySelector("#soma2");
//     if(input1.value >= 1 && input2.value >=1) {
      
      
//       const inputResultado = document.querySelector("#resultado-soma");
//       return inputResultado.value = parseInt(input1.value) + parseInt(input2.value);
//     };
//  }
// )}

// soma();


function soma(a,b){ //a e b são os nomes das variáveis
  if(a >= 1 && b >=1) {
      
      
    const inputResultado = document.querySelector("#resultado-soma");
    return inputResultado.value = parseInt(a) + parseInt(b);
  };
}

const botao = document.querySelector("#btn-soma");

botao.addEventListener('click', function(){
  const input1 = document.querySelector("#soma1");
  
  const input2 = document.querySelector("#soma2");

  soma(input1.value, input2.value)
});



function soma(a,b){

  if(parseInt(a) >= 1 && parseInt(b) >=1) {
    return parseInt(a) + parseInt(b)
  };
}


const botao = document.querySelector("#btn-soma");

botao.addEventListener('click', function(){
  const input1 = document.querySelector("#soma1");
  
  const input2 = document.querySelector("#soma2");

  const inputResultado = document.querySelector("#resultado-soma");
  inputResultado.value = soma(input1.value, input2.value);

  
});