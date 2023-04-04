/* VARIÁVEIS */

let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
let xAttempts = 1 

/* FUNÇÕES */

function handleTryClick(event){
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')
  
  if(Number(inputNumber.value) == randomNumber){
    toggleScreen()
    screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas!`
  }
  inputNumber.value = ""
  xAttempts++
}

function clickEnter(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function toggleScreen(){ 
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}
function handleResetClick(){
  toggleScreen()
  xAttempts = 1  
  randomNumber = Math.round(Math.random() * 10)
}


/* EVENTOS */

document.addEventListener('keydown', clickEnter) 
btnTry.addEventListener('click', handleTryClick) 
btnReset.addEventListener('click', handleResetClick)