let amigos = [];
let amigosTamanho= amigos.length

function adicionarAmigo(){
    let amigosLista = document.querySelector('#amigo').value;
    if (amigosLista === ''){
        alert('Por favor, insira um nome.')
    }else{
    amigosLista = amigosLista.charAt(0).toUpperCase() + amigosLista.slice(1)
    amigos.push(amigosLista);
    atualizarUl('listaAmigos',amigosLista);
    document.querySelector('#amigo').value ='';
    }
}

function atualizarUl(tag,texto){
    let campo= document.getElementById(tag);
    if (!campo) return;
    let li = document.createElement('li');
    li.textContent= texto;
    campo.appendChild(li);
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Todos os amigos já foram sorteados!');
        return;
    }
    if(amigos.length == 1){
        alert('Adicione mais um amigos para realizar o Sorteio');
    }else{
    let amigoEscolhidoIndex = Math.floor(Math.random() * amigos.length);
    let amigoEscolhido = amigos[amigoEscolhidoIndex];
    riscarAmigo(amigoEscolhido);
    atualizarUl('resultado', amigoEscolhido);
    amigos.splice(amigoEscolhidoIndex, 1);
    }
}

function riscarAmigo(amigoEscolhido) {
    let listaAmigos = document.getElementById('listaAmigos');
    if (!listaAmigos) return;

    let itens = listaAmigos.children;
    for (let i = 0; i < itens.length; i++) {
        if (itens[i].textContent === amigoEscolhido) {
            itens[i].style.textDecoration = 'line-through';
            break;
        }
    }
}