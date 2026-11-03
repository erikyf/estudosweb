function prepararPizza(callback) {
    console.log("Iniciando preparação");
    console.log("Ligar o forno");
    console.log("Abrir a massa");
    console.log("Adicionar mussarela");
    callback()
    console.log("Desligar o forno");
    console.log("Preparação finalizada");
    console.log("Comer a pizza!");
}

function pizzaDeMarguerita() {
    console.log("Colocar 10 minutos no forno");
    console.log("Adicionando manjericão");
}

function pizzaDeBrigadeiro() {
    console.log("Colocar 5 minutos no forno");
    console.log("Adicionando brigadeiro");
    console.log("Adicionando granulado");
}

prepararPizza(pizzaDeMarguerita);
prepararPizza(pizzaDeBrigadeiro);