
 const btnVerde = document.querySelector("#verde");

 const btnVermelho = document.querySelector("#vermelho");

 const mudaCor = document.querySelector('#muda-cor');

 mudaCor.style.width = "100px";
 mudaCor.style.height = "100px";

 btnVerde.addEventListener('click', function(){
   mudaCor.style.backgroundColor = "green";
 });

 btnVermelho.addEventListener('dblclick', function() {
   mudaCor.style.backgroundColor = "red";
 });