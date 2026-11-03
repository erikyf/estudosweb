const nomeInput = document.getElementById("nome");
const destinoInput = document.getElementById("destino");
const noitesInput = document.getElementById("noites");
const botao = document.querySelector("button");
const status = document.getElementById("status");

const precos = {
  joaopessoa: 200,
  recife: 250,
  natal: 180,
  fortaleza: 250,
  salvador: 220,
};

botao.addEventListener("click", () => {
  const nome = nomeInput.value;
  const destino = destinoInput.value
  const nomeDestino = destinoInput.options[destinoInput.selectedIndex].text;
  const noites = Number(noitesInput.value);
  const preco = precos[destino];
  const total = preco * noites;
  status.textContent = `Nome da Reserva: ${nome}, Nome do Destino: ${nomeDestino} - R$ ${total}`;

  verificarDisponibilidade();
  calcularPreco();
  processarPagamento();
  confirmarReserva();
  enviarConfirmacao();
});

function tempoAleatorio() {
  return Math.floor(Math.random() * 4000) + 1000;
}

function verificarDisponibilidade() {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Disponibilidade verificada.");
  }, tempo);
}

function calcularPreco() {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Preco calculado.");
  }, tempo);
}

function processarPagamento() {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Pagamento processado.");
  }, tempo);
}

function confirmarReserva() {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Reserva confirmada.");
  }, tempo);
}

function enviarConfirmacao() {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Confirmacao enviada.");
  }, tempo);
}