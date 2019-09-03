//(22) Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade ou menor.

const anoAtual = 2019;

function retornaMaioridade(anoNascimento){
  if(anoAtual - anoNascimento >= 18) {
    return "Você é maior de idade."
  }else{
    "Você é menor de idade."
  }
};

retornaMaioridade(1990);
