class Planeta {
    constructor(id, nome, tamanhoDoraio, temperaturaMedia) {
        this.id = id;
        this.nome = nome;
        this.tamanhoDoraio = tamanhoDoraio;
        this.temperaturaMedia = temperaturaMedia;
    }
}

let arrayPlanetas = [];
let idEmEdicao = null;

const inputId = document.getElementById("id");
const inputNome = document.getElementById("nome");
const inputTamanhoDoRaio = document.getElementById("tamanhoDoraio");
const inputTemperaturaMedia = document.getElementById("temperaturaMedia");
const botao = document.getElementById("botao");
const listaDePlanetas = document.getElementById("listaDePlanetas");

// Botão de cancelar edição (adicionado dinamicamente ao lado do botão principal)
let botaoCancelar = document.getElementById("botaoCancelar");
if (!botaoCancelar) {
    botaoCancelar = document.createElement("button");
    botaoCancelar.id = "botaoCancelar";
    botaoCancelar.textContent = "Cancelar";
    botaoCancelar.style.marginLeft = "5px";
    botaoCancelar.style.display = "none";
    botao.parentNode.insertBefore(botaoCancelar, botao.nextSibling);
    botaoCancelar.addEventListener("click", limparCampos);
}

function limparCampos() {
    inputId.value = "";
    inputId.disabled = false;
    inputNome.value = "";
    inputTamanhoDoRaio.value = "";
    inputTemperaturaMedia.value = "";
    botao.textContent = "Adicionar";
    botaoCancelar.style.display = "none";
    idEmEdicao = null;
}

function salvarPlaneta() {
    let id = inputId.value.trim();
    let nome = inputNome.value.trim();
    let tamanhoDoraio = inputTamanhoDoRaio.value.trim();
    let temperaturaMedia = inputTemperaturaMedia.value.trim();

    if (!id || !nome || !tamanhoDoraio || !temperaturaMedia) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    if (idEmEdicao !== null) {
        // Atualiza os dados do planeta em edição
        arrayPlanetas = arrayPlanetas.map((planeta) => {
            if (planeta.id === idEmEdicao) {
                planeta.nome = nome;
                planeta.tamanhoDoraio = tamanhoDoraio;
                planeta.temperaturaMedia = temperaturaMedia;
            }
            return planeta;
        });
        limparCampos();
        listarPlanetas();
    } else {
        // Validação: não permitir IDs repetidos no cadastro
        let idExiste = arrayPlanetas.some((planeta) => planeta.id === id);
        if (idExiste) {
            alert("Já existe um planeta cadastrado com esse ID!");
            return;
        }

        let planeta = new Planeta(id, nome, tamanhoDoraio, temperaturaMedia);
        arrayPlanetas.push(planeta);
        limparCampos();
        listarPlanetas();
    }
}

function listarPlanetas() {
    listaDePlanetas.textContent = "";

    arrayPlanetas.forEach((planeta) => {
        let item = document.createElement("li");
        item.textContent = `${planeta.id} - ${planeta.nome} - ${planeta.tamanhoDoraio} - ${planeta.temperaturaMedia} `;

        let excluirPlaneta = document.createElement("button");
        excluirPlaneta.textContent = "Excluir";
        excluirPlaneta.style.marginLeft = "5px";

        excluirPlaneta.addEventListener("click", () => {
            arrayPlanetas = arrayPlanetas.filter((p) => p.id !== planeta.id);
            if (idEmEdicao === planeta.id) {
                limparCampos();
            }
            listarPlanetas();
        });

        let editarPlaneta = document.createElement("button");
        editarPlaneta.textContent = "Editar";
        editarPlaneta.style.marginLeft = "5px";

        editarPlaneta.addEventListener("click", () => {
            inputId.value = planeta.id;
            inputId.disabled = true; // Mantém o ID bloqueado durante a edição
            inputNome.value = planeta.nome;
            inputTamanhoDoRaio.value = planeta.tamanhoDoraio;
            inputTemperaturaMedia.value = planeta.temperaturaMedia;

            idEmEdicao = planeta.id;
            botao.textContent = "Salvar";
            botaoCancelar.style.display = "inline-block";
        });

        item.appendChild(excluirPlaneta);
        item.appendChild(editarPlaneta);
        listaDePlanetas.appendChild(item);
    });
}

botao.addEventListener("click", salvarPlaneta);