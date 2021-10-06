var conteudoA = "<h2>Bem ou Mau</h2> <div class='container'> <div class='text'> <p><span>Tudo</span> começa em uma cidade chamada Bright Falls na parte residencial na casa dos Flatt com uma briga. Na humilde moradia vive Will, um jovem de 16 anos que é o atual campeão de ginástica da cidade, sua mãe Erika que só tinha tempo para ficar em casa com os filhos no final de semana já que trabalhava os outros dias em tempo integral em uma lanchonete de manhã e em uma gráfica de tarde, tudo isso para sustentar a casa, Alan o filho mais novo que tinha apenas 7 anos, mas tinha a maturidade de alguém com 20 talvez pela criação de ter apenas sua mãe aos fins de semana e seu irmão mais velho com uma figura paterna.</p> <p><span></span></p> </div>  <div class='photo-box'> <img class='img-1' src='imagens/iron-giant1.jpg' /> </div> <div class='box'> <button onclick='carregarConteudo(conteudoB1)'>Voltar para casa</button> <button onclick='carregarConteudo(conteudoB2)'>Ajudar o robô</button> </div> </div>";

var conteudoB1 = "<img src='imagens/iron-giant2.jpg' /> <h2>Conteudo B1</h2>  <p>B1</p> <p></p> <button onclick='carregarConteudo(conteudoC1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC2)'>Ir para a Esquerda</button>";

var conteudoB2 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo B2</h2> <p>B2</p> <p></p> <button onclick='carregarConteudo(conteudoC3)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoC4)'>Ir para a Esquerda</button>";

var conteudoC1 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo C1</h2> <p>C1</p> <p></p> <button onclick='carregarConteudo(conteudoD1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoD2)'>Ir para a Esquerda</button>";

var conteudoC2 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo C2</h2> <p>C2</p> <p></p> <button onclick='carregarConteudo(conteudoD3)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoD4)'>Ir para a Esquerda</button>";

var conteudoC3 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo C3</h2> <p>C3</p> <p></p> <button onclick='carregarConteudo(conteudoD1)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoD4)'>Ir para a Esquerda</button>";

var conteudoC4 = "<img src='imagens/iron-giant3.jpg' />  <h2>Conteudo C4</h2> <p>C4</p> <p></p> <button onclick='carregarConteudo(conteudoD2)'>Ir para a Direita</button> <button onclick='carregarConteudo(conteudoD3)'>Ir para a Esquerda</button>";

var conteudoD1 = "<p>final 1</p> <button onclick='carregarConteudo(final1)'>Explodir tudo</button>";
var conteudoD2 = "<p>final 1</p> <button onclick='carregarConteudo(final2)'>Salvar todos</button>";
var conteudoD3 = "<p>final 1</p> <button onclick='carregarConteudo(final3)'>Arriscar tudo</button>";
var conteudoD4 = "<p>final 1</p> <button onclick='carregarConteudo(final4)'>Orgulho</button>";

var final1 = "<p>KABUM</p>";
var final2 = "<p>Salvo</p>";
var final3 = "<p>Arriscado</p>";
var final4 = "<p>Orgulhoso</p>";

var elemento = document.getElementById("conteudo");

function carregarConteudo(conteudo){
    elemento.innerHTML = conteudo;
}

carregarConteudo(conteudoA);