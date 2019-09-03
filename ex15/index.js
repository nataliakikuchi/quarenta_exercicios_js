const btnColocaTexto = document.querySelector("#coloca-texto");

const divRecebeTexto = document.querySelector("#texto");

btnColocaTexto.addEventListener('click', function(){
  divRecebeTexto.innerHTML = "<h1>Esse texto foi enfiado aqui através do JavaScript</h1>";
  // divRecebeTexto.textContent = "OI";
   
});

//a diferença entre textContent e innerHTML é que o textContent insere texto puro no elemento html e o innerHTML cria o parse (conversão) da string para html.