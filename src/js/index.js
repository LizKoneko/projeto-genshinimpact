//comentários é um bom guia para seguir para voce ir pensando em como o codigo vai se comportar

/*

Objetivo 1 - quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma. 
    Passo 1- pegar o botão de seleção de plataformas no js para poder verificar quando o usuário clicar em cima dele
    Passo 2- pegar o elemento do conteúdo que precisa ser mostrado
    Passo 3- pegar o clique do usuário no js
    Passo 4- quando o usuário clicar, adicionar a classe ativo no botão para que o conteúdo dele apareça

Objetivo 2 - caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido.
    Passo 1- verificar se o botão já está aberto, se sim, vamos remover a classe ativo para esconder o conteúdo novamente

*/

const botao = document.querySelector(".jogue-ja__cartao__btn-plataforma");
const elementoPlataformas = document.querySelector(".jogue-ja__cartao__btn-plataforma__plataformas");

//O que está depois da virgula é uma "função de seta"
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
});
//toggle diz - se tem a classe "ativo" na lista de classes, eu vou remover, e se não tem eu vou colocar. Ele serve para alternar
//as aspas dentro dos parenteses é importante quando você quer colocar uma frase e tals, pq se nao tiver vai ser considerado uma variavel


