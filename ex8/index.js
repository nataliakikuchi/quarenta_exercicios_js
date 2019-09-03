const inputCPF = document.querySelector(".cpfnumberinput");
const btn = document.querySelector(".sendcpf");

btn.addEventListener('click', function() {
  let inputCPFvalue = inputCPF.value;
  inputCPFvalue = inputCPFvalue.replace(/\D/g,''); //d tira dígito e D tira o que não é dígito
  console.log(inputCPF);
  alert(inputCPFvalue);
});