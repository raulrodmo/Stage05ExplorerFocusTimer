import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonUnmute,
  buttonMute
} from "./elements.js"

export default function ({
  controls,
  timer,
  sound,
}){
buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdown()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
})

buttonStop.addEventListener('click', function(){
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonUnmute.addEventListener('click', function () {
  buttonUnmute.classList.add('hide')
  buttonMute.classList.remove('hide') 
  sound.bgAudio.pause()
})

buttonMute.addEventListener('click', function () {
  buttonUnmute.classList.remove('hide')
  buttonMute.classList.add('hide') 
  sound.bgAudio.play()
})

buttonSet.addEventListener('click', function () {
  let newMinutes = controls.getMinutes()

  if(!newMinutes){
    timer.reset()
    return
  }
  
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
}