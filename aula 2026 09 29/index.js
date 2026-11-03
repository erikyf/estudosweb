function funcaoBase(texto, callback) {
    setTimeout(() => {
        callback(texto);
    }, 2000);
};
let mensagem = 'Olá, mundo!';
console.log('Iniciando a função base...');
console.log('Aguardando 2 segundos para executar o callback...');

funcaoBase(mensagem, (argumento) => {
    console.log('Executando callback após 2 segundos');
    console.log('Argumento recebido:', argumento);
});
console.log('Função base finalizada, mas o callback ainda não foi executado.');