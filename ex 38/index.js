// (38) Crie o seguinte array: var deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
// E exiba todos os nomes, dentro do html: <ul id="nomes"></ul>

let deuses = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr'];

const pegaUl = document.querySelector("#nomes");

const criaLi = document.createElement("li");
pegaUl.appendChild(criaLi);

criaLi.innerHTML = deuses;

