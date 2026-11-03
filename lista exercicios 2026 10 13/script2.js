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
      console.log("Disponibilidade verificada.");
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
        reject(new Error("Erro ao calcular preço"));
        return;
      }

      dados.preco = precoDiaria;
      dados.total = precoDiaria * dados.noites;
      console.log("Preco calculado");
      resolve(dados);
    }, tempo);
  });
}

function processarPagamento(dados) {
  return new Promise((resolve, reject) => {
    const tempo = tempoAleatorio();

    setTimeout(() => {
      if (!dados.total || dados.total <= 0) {
        reject(new Error("Falha no pagament"));
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
        reject(new Error("Reserva sem nome!"));
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

botao.addEventListener("click", () => {
  const nome = nomeInput.value.trim();
  const destino = destinoInput.value;
  const nomeDestino = destinoInput.options[destinoInput.selectedIndex]?.text || destino;
  const noites = Number(noitesInput.value);

  if (!nome) {
    status.textContent = "Nome é obrigatório.";
    return;
  }
  if (!noites || noites <= 0) {
    status.textContent = "Número de noites é obrigatório";
    return;
  }

  const dados = { nome, destino, nomeDestino, noites };
  botao.disabled = true;
  status.textContent = "Iniciando verificação de disponibilidade";

  verificarDisponibilidade(dados)
    .then((dadosAtualizados) => {
      status.textContent = "Disponibilidade confirmada. Calculando preço";
      return calcularPreco(dadosAtualizados);
    })
    .then((dadosAtualizados) => {
      status.textContent = `Preço calculado: R$ ${dadosAtualizados.total}. Processando pagamento`;
      return processarPagamento(dadosAtualizados);
    })
    .then((dadosAtualizados) => {
      status.textContent = "Pagamento processado. Confirmando reserva";
      return confirmarReserva(dadosAtualizados);
    })
    .then((dadosAtualizados) => {
      status.textContent = "Reserva confirmada. Enviando confirmação";
      return enviarConfirmacao(dadosAtualizados);
    })
    .then((dadosFinais) => {
      status.textContent = `Reserva realizada. Nome: ${dadosFinais.nome}, Destino: ${dadosFinais.nomeDestino} (${dadosFinais.noites} noites) - Total: R$ ${dadosFinais.total}. Confirmação enviada.`;
    })
    .catch((erro) => {
      console.error(erro.message);
      status.textContent = `Erro: ${erro.message}`;
    })
    .finally(() => {
      botao.disabled = false;
    });
});

