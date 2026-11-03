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

function verificarDisponibilidade(dados, callback) {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    if (dados.noites > 30) {
      callback(new Error("Não há disponibilidade para estadias superiores a 30 noites."));
      return;
    }
    console.log("Disponibilidade verificada.");
    callback(null, dados);
  }, tempo);
}

function calcularPreco(dados, callback) {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    const destinoChave = dados.destino.toLowerCase();
    const precoDiaria = precos[destinoChave];

    if (!precoDiaria || dados.noites <= 0) {
      callback(new Error("Erro ao calcular preço: destino ou número de noites inválido."));
      return;
    }

    dados.preco = precoDiaria;
    dados.total = precoDiaria * dados.noites;
    console.log("Preco calculado.");
    callback(null, dados);
  }, tempo);
}

function processarPagamento(dados, callback) {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    if (!dados.total || dados.total <= 0) {
      callback(new Error("Falha no processamento do pagamento: valor inválido."));
      return;
    }
    console.log("Pagamento processado.");
    callback(null, dados);
  }, tempo);
}

function confirmarReserva(dados, callback) {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    if (!dados.nome) {
      callback(new Error("Falha ao confirmar reserva: nome ausente."));
      return;
    }
    dados.idReserva = Math.floor(Math.random() * 90000) + 10000;
    console.log("Reserva confirmada.");
    callback(null, dados);
  }, tempo);
}

function enviarConfirmacao(dados, callback) {
  const tempo = tempoAleatorio();

  setTimeout(() => {
    console.log("Confirmacao enviada.");
    callback(null, dados);
  }, tempo);
}

botao.addEventListener("click", () => {
  const nome = nomeInput.value.trim();
  const destino = destinoInput.value;
  const nomeDestino = destinoInput.options[destinoInput.selectedIndex]?.text || destino;
  const noites = Number(noitesInput.value);

  if (!nome) {
    status.textContent = "Erro: Por favor, preencha o nome.";
    return;
  }
  if (!noites || noites <= 0) {
    status.textContent = "Erro: O número de noites deve ser maior que zero.";
    return;
  }

  const dados = { nome, destino, nomeDestino, noites };
  botao.disabled = true;
  status.textContent = "Iniciando verificação de disponibilidade...";

  verificarDisponibilidade(dados, (erroDisp, dadosDisp) => {
    if (erroDisp) {
      console.error(erroDisp.message);
      status.textContent = `Erro: ${erroDisp.message}`;
      botao.disabled = false;
      return;
    }

    status.textContent = "Disponibilidade confirmada. Calculando preço...";
    calcularPreco(dadosDisp, (erroPreco, dadosPreco) => {
      if (erroPreco) {
        console.error(erroPreco.message);
        status.textContent = `Erro: ${erroPreco.message}`;
        botao.disabled = false;
        return;
      }

      status.textContent = `Preço calculado: R$ ${dadosPreco.total}. Processando pagamento...`;
      processarPagamento(dadosPreco, (erroPagamento, dadosPagamento) => {
        if (erroPagamento) {
          console.error(erroPagamento.message);
          status.textContent = `Erro: ${erroPagamento.message}`;
          botao.disabled = false;
          return;
        }

        status.textContent = "Pagamento processado. Confirmando reserva...";
        confirmarReserva(dadosPagamento, (erroConfirmacao, dadosReserva) => {
          if (erroConfirmacao) {
            console.error(erroConfirmacao.message);
            status.textContent = `Erro: ${erroConfirmacao.message}`;
            botao.disabled = false;
            return;
          }

          status.textContent = `Reserva confirmada. Enviando confirmação...`;
          enviarConfirmacao(dadosReserva, (erroEnvio, dadosFinais) => {
            if (erroEnvio) {
              console.error(erroEnvio.message);
              status.textContent = `Erro: ${erroEnvio.message}`;
              botao.disabled = false;
              return;
            }

            status.textContent = `Reserva concluída com sucesso! Nome: ${dadosFinais.nome}, Destino: ${dadosFinais.nomeDestino} (${dadosFinais.noites} noites) - Total: R$ ${dadosFinais.total}. Confirmação enviada.`;
            botao.disabled = false;
          });
        });
      });
    });
  });
});

