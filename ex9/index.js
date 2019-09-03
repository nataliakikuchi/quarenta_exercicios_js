const inputCPF = document.querySelector(".cpfnumberinput");
const btn = document.querySelector(".sendcpf");

btn.addEventListener('click', function() {
  let inputCPFvalue = inputCPF.value;
  inputCPFvalue = inputCPFvalue.replace(/(\d{3})(\d{3})(\d{3})(\d)/ , "$1.$2.$3-$4");
  
  console.log(inputCPF);
  alert(inputCPFvalue);
});