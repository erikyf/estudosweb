function tempoAleatorio() {
  return Math.floor(Math.random() * 4000) + 1000;
}

function analisarTerreno(callback) {
  setTimeout(() => {
    console.log("1. Terreno analisado: ✅");
    callback();
  }, tempoAleatorio());
}

function mover(callback) {
  setTimeout(() => {
    console.log("2. Sonda movida: ✅");
    callback();
  }, tempoAleatorio());
}

function coletarAmostra(callback) {
  setTimeout(() => {
    console.log("3. Amostra coletada: ✅");
    callback();
  }, tempoAleatorio());
}

function carregarBateria(callback) {
  setTimeout(() => {
    console.log("4. Bateria carregada: ✅");
    callback();
  }, tempoAleatorio());
}

function transmitirDados(callback) {
  setTimeout(() => {
    console.log("5. Dados transmitidos: ✅");
    callback();
  }, tempoAleatorio());
}

const botao = document.getElementById("botao").addEventListener("click", () => {
  analisarTerreno(() =>
    mover(() =>
      coletarAmostra(() =>
        carregarBateria(() =>
          transmitirDados(() => {
            console.log("Acaboooooooooooou! 🚀");
          }),
        ),
      ),
    ),
  );
});
