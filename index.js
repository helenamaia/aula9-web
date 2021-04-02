
//console.log(Document);

const botaoTeste = document.getElementById('botao-teste');
const outroBotao = document.getElementById('outro-botao');

console.log(botaoTeste);
console.log(outroBotao);

const botaoSelector = document.querySelector('#botao-selector');

console.log(botaoSelector);

const botaoPrincipal = document.querySelector('.botao-principal');

console.log(botaoPrincipal);

const lista = document.querySelector('ul');
console.log(lista);

const botaoVarios = document.querySelector('.botao-varios');
console.log(botaoVarios);

const variosBotoes = document.querySelectorAll('.botao-varios');
console.log(variosBotoes);
console.log(variosBotoes[2]);

for(const botao of variosBotoes){
    console.log(botao);
}

const botaoMudar = document.querySelector('.botao-mudar');
console.log(botaoMudar.textContent);

botaoMudar.textContent = 'Agora eu mudei o texto';

const paragrafo = document.querySelector('p');
console.log(paragrafo.innerHTML);

paragrafo.innerHTML = `<strong>${paragrafo.innerHTML}</strong>`;

console.log(paragrafo.innerHTML);
console.log(paragrafo.textContent);