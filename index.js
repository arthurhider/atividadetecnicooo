// document.write("Hello ")

// document.querySelector("#teste")


// let elemento = document.getElementById("elemento");

// elemento.textContent = "Outra coisa";






// let textos = document.getElementsByClassName('texto');

// console.log(textos.length);
// textos[0].innerText = 'Primeiro texto modificado';





// let paragrafo = document.getElementById('paragrafo');

// paragrafo.style.color = 'blue';

// paragrafo.style.fontsize = '20px';



// 1)
// let title = document.getElementsByClassName('textos');
// title[0].innerText = "Pagina HTML";
// title[1].innerText = "descricao";
// let nome = prompt("Digite seu nome:");
// let cor = prompt("Digite a cor que você deseja em inglês:");


// title[0].innerText = `bem vindo ${nome}`  ;
// title[0].style.color = cor;

// 2)
// const botao = document.getElementById('botao');
// const reset = document.getElementById('resetar');
// let numero = document.getElementById('numeros');
// let contador=0
// botao.addEventListener('click', function() {
// contador += 1
// numero.innerText = Number(contador)
// });
// reset.addEventListener('click', function() {
// contador = 0
// numero.innerText = Number(contador)
// })

//3)
// let texto = document.getElementById('texto');
// let botao = document.getElementById('mostrar');
// let visivel = false;
 
// botao.addEventListener('click', () => {
//     visivel = !visivel;
//     texto.hidden = !visivel;
//     botao.innerText = visivel ? 'Ocultar' : 'Mostrar';
// });

// 4
// const botao = document.getElementById('botao');
// let numero = document.getElementById('numeros');
// botao.addEventListener('click', function() {
// let contador = prompt("Digite um texto")
// numero.innerText = String(contador)
// });

// 5
// let tecla = document.getElementById('texto')
// document.addEventListener('keydown', function() {
//     tecla.innerText = `Você pressionou a tecla ${event.key}`
// })
