const carrinho = [];

const pizzas = [
  { nome: "Peperoni 🍅", preco: 100 },
  { nome: "Mussarela 🧀", preco: 80 },
  { nome: "Abacaxi 🍍", preco: 120 }
];

function comprar(preco) {
  const quantidade = document.getElementById("quantidade");
  const total = document.getElementById("total");

      carrinho.push({ preco: preco });

  quantidade.textContent = carrinho.length;
  
  const valor = carrinho.reduce((soma, produto) => soma + produto.preco, 0);
  
  total.textContent = valor;
}

function criarCardPizza(pizza) {
  const card = document.createElement("article");
  card.innerHTML = `
    <h3>${pizza.nome}</h3>
    <p>Preço: R$ ${pizza.preco}</p>
    <button onclick="comprar(${pizza.preco})">Comprar</button>
  `;
  return card;
}

function renderizarPizzas() {
  const container = document.getElementById("Pizza");
  container.innerHTML = "";
  pizzas.forEach((pizza) => {
    const card = criarCardPizza(pizza);
    container.appendChild(card);
  });
}

renderizarPizzas();
