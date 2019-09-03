// (36) Exiba o próximo mês (dinamicamente obviamente)

const pegaDiv = document.querySelector(".inserir-mes");

const criaParagrafo = document.createElement("p");
pegaDiv.appendChild(criaParagrafo);
criaParagrafo.classList.add("proximo-mes");

let mes = new Date();
let meses = new Array();
meses[0] = "January";
meses[1] = "February";
meses[2] = "March";
meses[3] = "April";
meses[4] = "May";
meses[5] = "June";
meses[6] = "July";
meses[7] = "August";
meses[8] = "September";
meses[9] = "October";
meses[10] = "November";
meses[11] = "December";

// let proximoMes = 

// criaParagrafo.innerHTML = ("Mês que vem é " + proximoMes);

let tamanhoArray = meses.length;
let incrementa = -3;

for(let i = 0; i < tamanhoArray; i++) {
  criaParagrafo.innerHTML += `<br>Mês que vem é  + ${meses[mes.getMonth() + incrementa]}`;
  incrementa++;

}
console.log(mes);

