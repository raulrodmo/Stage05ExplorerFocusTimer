let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonUnmute = document.querySelector('.unmute')
let buttonMute = document.querySelector('.mute')
let minutes
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')




const form = document.querySelector('form')

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function(){
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonStop.classList.add('hide')
})

buttonUnmute.addEventListener('click', function () {
  buttonUnmute.classList.add('hide')
  buttonMute.classList.remove('hide')
})

buttonMute.addEventListener('click', function () {
  buttonMute.classList.add('hide')
  buttonUnmute.classList.remove('hide')
})

buttonSet.addEventListener('click', function () {
  minutes = prompt('Quantos minutos?')
  minutesDisplay.textContent=minutes
})