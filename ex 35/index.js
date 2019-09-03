// (35) Exiba a data atual pelo JavaScript no seguinte formato: dia/mês/Ano

const pegaDiv = document.querySelector(".inserir-data");

const criaParagrafo = document.createElement("p");
pegaDiv.appendChild(criaParagrafo);
criaParagrafo.classList.add("data-atual");

now = new Date; //Cria uma nova variável de data now com o comando new Date, que instrui o JavaScript a criar um novo objeto date e preenche-lo com a data atual.

criaParagrafo.innerHTML = ("Hoje é " + now.getDay() + ", " + " de " + now.getMonth() + " de " + now.getFullYear());

console.log(now);

criaParagrafo.innerHTML = now;