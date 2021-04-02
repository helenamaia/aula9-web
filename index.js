
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