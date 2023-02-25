import resetControls from "./controls.js"
import "./timer.js"


let buttonPlay = document.querySelector('.play')
let buttonPause = document.querySelector('.pause')
let buttonStop = document.querySelector('.stop')
let buttonSet = document.querySelector('.set')
let buttonUnmute = document.querySelector('.unmute')
let buttonMute = document.querySelector('.mute')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeout

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')

  coutdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeout)
})

buttonStop.addEventListener('click', function(){
  resetControls()
  resetTimer()
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
  let newMinutes = prompt('Quantos minutos?')
  if (newMinutes){
    resetTimer()
    return
  }

  minutes = newMinutes
  updateTimerDisplay(minutes, 0)
})