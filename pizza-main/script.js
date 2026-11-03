
const sabores = [
  { nome: "Peperoni 🍅", preco: 100 },
  { nome: "Mussarela 🧀", preco: 80 },
  { nome: "Abacaxi 🍍", preco: 120 },
];

const cardapio = document.getElementById("cardapio");

function renderizarCardapio(sabor) {
  return `
    <article>
        <h3>${sabor.nome}</h3>
        <p>Preço: R$ ${sabor.preco}</p>
        <button onclick="comprar(sabores[${sabores.indexOf(sabor)}])">Comprar</button>
    </article>`;
}

cardapio.innerHTML = sabores.map((sabor) => renderizarCardapio(sabor)).join("");

const carrinho = [];

function comprar(sabor) {
  const quantidade = document.getElementById("quantidade");
  const total = document.getElementById("total");

  carrinho.push(sabor);

  quantidade.textContent = carrinho.length;

  const valor = carrinho.reduce((soma, produto) => soma + produto.preco, 0);

  total.textContent = valor;
}
