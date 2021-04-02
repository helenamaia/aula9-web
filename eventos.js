const funcaoClique = () => {
    console.log('Usuário clicou no botaão');
}

const meClique = document.querySelector('.me-clique');

meClique.addEventListener('click', funcaoClique);

const meCliqueTambem = document.querySelector('.me-clique-tambem');
meCliqueTambem.addEventListener('dblclick', () =>{
        console.log('Usuario me clicou tambem');
});

const botaoEuSei = document.querySelector('.eu-sei-quem-sou');
botaoEuSei.addEventListener('click', (event) =>{
   // console.log(event);
   console.log(`Quem gerou o evento: ${event.target.textContent}` );
});

const form = document.querySelector('#form-enviar');
form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const elementoNome = form.querySelector('input');

    console.log(elementoNome.value);

    const divPessoa = document.querySelector('#pessoa');
    divPessoa.innerHTML = `Nome informado: <em>${elementoNome.value}</em>`
   // console.log(e);
});

