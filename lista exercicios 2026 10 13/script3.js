const nomeInput = document.getElementById("nome");
const destinoInput = document.getElementById("destino");
const noitesInput = document.getElementById("noites");
const botao = document.getElementById("reservar");
const status = document.getElementById("status");

const precos = {
  joaopessoa: 200,
  recife: 250,
  natal: 180,
  fortaleza: 250,
  salvador: 220,
};

function tempoAleatorio() {
  return Math.floor(Math.random() * 4000) + 1000;
}

function verificarDisponibilidade(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      if (dados.noites > 30) {
        reject(new Error("Não há disponibilidade para estadias superiores a 30 noites."));
        return;
      }
      console.log("Disponibilidade verificada");
      resolve(dados);
    }, tempo);
  });
}

function calcularPreco(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      const destinoChave = dados.destino.toLowerCase();
      const precoDiaria = precos[destinoChave];

      if (!precoDiaria || dados.noites <= 0) {
        reject(new Error("informações inválidas."));
        return;
      }

      dados.preco = precoDiaria;
      dados.total = precoDiaria * dados.noites;
      console.log("Preco calculado ok");
      resolve(dados);
    }, tempo);
  });
}

function processarPagamento(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      if (!dados.total || dados.total <= 0) {
        reject(new Error("Falha no pagamento"));
        return;
      }
      console.log("Pagamento processado");
      resolve(dados);
    }, tempo);
  });
}

function confirmarReserva(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      if (!dados.nome) {
        reject(new Error("Nome é obrigatório"));
        return;
      }
      dados.idReserva = Math.floor(Math.random() * 90000) + 10000;
      console.log("Reserva confirmada");
      resolve(dados);
    }, tempo);
  });
}

function enviarConfirmacao(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      console.log("Confirmacao enviada");
      resolve(dados);
    }, tempo);
  });
}

botao.addEventListener("click", async () => {
  const nome = nomeInput.value.trim();
  const destino = destinoInput.value;
  const nomeDestino = destinoInput.options[destinoInput.selectedIndex]?.text || destino;
  const noites = Number(noitesInput.value);

  if (!nome) {
    status.textContent = "Nome é obrigatório";
    return;
  }
  if (!noites || noites <= 0) {
    status.textContent = "N. de noites é obrigatório";
    return;
  }

  const dados = { nome, destino, nomeDestino, noites };
  botao.disabled = true;

  try {
    status.textContent = "Iniciando verificação de disponibilidade...";
    await verificarDisponibilidade(dados);

    status.textContent = "Disponibilidade confirmada. Calculando preço...";
    await calcularPreco(dados);

    status.textContent = `Preço calculado: R$ ${dados.total}. Processando pagamento...`;
    await processarPagamento(dados);

    status.textContent = "Pagamento processado. Confirmando reserva...";
    await confirmarReserva(dados);

    status.textContent = "Reserva confirmada. Enviando confirmação...";
    await enviarConfirmacao(dados);

    status.textContent = `Reserva concluída com sucesso! Nome: ${dados.nome}, Destino: ${dados.nomeDestino} (${dados.noites} noites) - Total: R$ ${dados.total}. Confirmação enviada.`;
  } catch (erro) {
    console.error(erro.message);
    status.textContent = `Erro: ${erro.message}`;
  } finally {
    botao.disabled = false;
  }
});

