function tempoAleatorio() {
  return Math.floor(Math.random() * 4000) + 1000;
}

function analisarTerreno() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1. Terreno analisado: ✅");
      resolve("1. Terreno analisado: ✅");
    }, tempoAleatorio());
  });
}

function mover() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2. Sonda movida: ✅");
      resolve("2. Sonda movida: ✅");
    }, tempoAleatorio());
  });
}

function coletarAmostra() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3. Amostra coletada: ✅");
      resolve("3. Amostra coletada: ✅");
    }, tempoAleatorio());
  });
}

function carregarBateria() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4. Bateria carregada: ✅");
      resolve("4. Bateria carregada: ✅");
    }, tempoAleatorio());
  });
}

function transmitirDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5. Dados transmitidos: ✅");
      resolve("5. Dados transmitidos: ✅");
    }, tempoAleatorio());
  });
}

const botao = document.getElementById("botao").addEventListener("click", () => {
  analisarTerreno().then(() =>
    mover().then(() =>
      coletarAmostra().then(() =>
        carregarBateria().then(() => transmitirDados()),
      ),
    ),
  );

  analisarTerreno()
    .then(() => mover())
    .then(() => coletarAmostra())
    .then(() => carregarBateria())
    .then(() => transmitirDados());
});
