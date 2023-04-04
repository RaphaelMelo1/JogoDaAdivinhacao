/* Agora o código fica maluco de verdade */

// Começamos criando uma variável com o número aleatório para a pessoa acertar

/* VARIÁVEIS */

let randomNumber = Math.round(Math.random() * 10)
//Como usamos várias vezes add e remove das .screen, simplifiquemos com duas variáveis ->
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1 // O número de tentativas sempre começará com 1 né.

/* FUNÇÕES */

//Agora vamos criar a função pra quando clicar no botão, ela ser executada. Isso é o DOM.

function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  
  if(Number(inputNumber.value) == randomNumber){ //O .value no inputNumber serve para sempre pegar o valor que estiver no input.
    toggleScreen()
     //Se o número digitado for igual ao número aleatório, a função rodará, adicionando a class 'hide' na tela inicial, fazendo ela se esconder. Como a tela 1 irá sumir, a tela 2 terá que aparecer.
    screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas!`
  }

  

  //Aqui já é pessoal, mas sempre que eu errar o número, quero apagá-lo automaticamente:
  inputNumber.value = ""
  //Ah, claro! Temos que adicionar 1 número de tentativa a cada vez que o usuário clicar no button.
  xAttempts++
}

function clickEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function toggleScreen(){ //Caso tenha hide, irá tirar, e caso não tenha, irá adicionar.
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function handleResetClick(){
  toggleScreen()
  xAttempts = 1  //Para reiniciar a quantidade de tentativas.
  randomNumber = Math.round(Math.random() * 10) //Para gerar um número diferente toda vez que resetar o jogo, aliás, não posso ficar acertando pra sempre.
}


//Eventos!

document.addEventListener('keydown', clickEnter) // Agora quando apertarmos Enter quando acertarmos o número, irá resetar o jogo, antes só funcionava se clicasse no botão pra reiniciar, agora o Enter também funciona.
btnTry.addEventListener('click', handleTryClick) //Aqui nós usamos uma callback chamando a function pelo nome, mas podemos fazer assim também:
btnReset.addEventListener('click', handleResetClick)