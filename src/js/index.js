//alert('oi'); caso queira que aparece um aviso na tela assim que entra no site

/*
Objetivo 1 - quando o usuário clicar no botão mostrar mais, deve abrir os projetos que estão escondidos no html
    Passo1 - pegar o botão mostrar mais no js pra poder verificar quando o usuário clicar em cima dele

    Passo 2 - identificar o clique no botão

    Passo 3 - adicionar a classe ativo nos projetos escondidos

Objetivo 2 - esconder o botão de mostrar mais
    Passo 1 - pegar o botão e esconder ele
*/

//Passo 1 - pegar o botao

//console.log(document.querySelector('.btn-mostrar-acesso')); console é o objeto, log é pra logar,mostrar informações na aba console do navegador. document é o objeto pra acessar o que tem dentro do document, que ta representando o html. queryselector, query seria buscar um seletor que ta dentro do document. o seletor que vamos usar é o mostrar mais projetos

const botaoMostrarAcessos = document.querySelector('.btn-mostrar-acessos'); //const é a declaração, se ela é constante não pode modificar ela dps no código, botao é o nome da variavel, document.getElementById('botao') é a atribuição
const acessosInativos = document.querySelectorAll ('.acesso:not(.ativo)');
//queryselectall é pra buscar TODOS OS ELEMENTOS dessa class. acesso:not(.ativo) é pra indicar que a class .ativo não irão fazer parte desse click mostrar mais, já que eles jã estão expostos. resumidamente, pra indicar que a variavel acessos inativos é so os inativos

//Passo 2 - identificar o clique no botão
botaoMostrarAcessos.addEventListener('click', () => {
    //Passo 3 - adicionar a class acesso ativo nas class escondidas
    acessosInativos.forEach(acessoInativo => { //o foreach é um laço, em que para cada acesso inativo vamos realizar alguma ação; acessoinativo é uma variavel que vamos usar dentro do laço,singular, ou seja, ta sevindo pra cada acesso.
        acessoInativo.classList.add('ativo');
        //classlist é pra pegar todas as class de uma div  e o add (ativo) é pra que todas apareçam
    });

    //Objetivo 2 - esconder o botão de mostrar mais
    //Passo 1 - pegar o botão e esconder ele
    //FORA DO FOREACH

    botaoMostrarAcessos.classList.add('remover');
    //pegamos o botaomostraracessos, adicionamos a ele o add('remover') para sumir

})
//addeventlistener é pra adicionar uma escuta no botão, pra que ele faça algo. dentro do parenteses ta dizendo que ao ter um click vai acontecer algo; a virgula é pra dizer qual ação vai ser realizada após o click. vamos usar uma função de seta () => {} . dentro das chaves é onde a ação vai acontecer

//console.log(acessoInativo); com o console log ele consegue analisar um em um de uma vez só