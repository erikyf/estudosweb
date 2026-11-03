const sabor = document.getElementById("sabor").value;
const quantidade = document.getElementById("quantidade").value;
const status = document.getElementById("status").value;
const botao = document.getElementById("botao");

const precos = {
    marguerita : 85,
    frangocomcreamcheese : 60,
    portuguesa : 40,
    doisamores : 60,
};

botao.addEventListener("click", ()=>{
    alert("funcionou!");
})

// console.log(sabor);
// console.log(quantidade);
// console.log(status);