const promise = fetch("https://jsonplaceholder.typicode.com/users");
console.log(promise);
const usuariosPromise = fetch("https://jsonplaceholder.typicode.com/users");
usuariosPromise.then(usuarios => {
    const usuariosJsonPromise = usuarios.json();
    usuariosJsonPromise.then(usuariosJson => {
        console.log(usuariosJson);
    }).catch(erro => {
        console.error(erro);
    });
});

const promise2 = fetch("https://jsonplaceholder.typicode.com/users");
console.log(promise2);

const promise3 = fetch("https://jsonplaceholder.typicode.com/users");
console.log(promise3);

Promise.all([promise, promise2, promise3]).then(respostas => {
    console.log(respostas);
}).catch(erro => {
    console.error("Uma das promises falhou", erro);
});

async function buscarUsuarios() {
    const buscaApi = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await buscaApi.json()
        res.forEach(u => {
            console.log(u);  
        }); 
    }

    console.log("Iniciando busca de usuários...");
    buscarUsuarios()