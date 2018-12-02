import '../less/main.less'
import Icon from '../img/hyper.png'
import Timer from './timer'

// Set Favicon
const link =
  document.querySelector("link[rel*='icon']") || document.createElement('link')
link.type = 'image/png'
link.rel = 'icon'
link.href = Icon
document.querySelector('head').appendChild(link)

document.addEventListener('DOMContentLoaded', e => {
  let settingsOpen = false

  function toggleSettings(e) {
    e.preventDefault()
    settingsOpen = !settingsOpen
    document.querySelector('.settings').classList.toggle('show')
    document.querySelector('.overlay').classList.toggle('show')
  }

  document
    .querySelector('.settings .toggle')
    .addEventListener('click', toggleSettings)

  const timer = new Timer({
    elem: document.querySelector('.timer'),
    delay: 100,
    minutes: 15
  })

  let minutes
  let minutesChanged = false
  const timerStart = document.querySelector('.start-timer')
  const timerReset = document.querySelector('.reset-timer')
  const saveForm = document.querySelector('.save-form')
  const resetForm = document.querySelector('.reset-form')
  const goalInput = document.querySelector('input#goal')
  const minutesInput = document.querySelector('input#minutes')
  const goal = document.querySelector('.goal')

  timerStart.addEventListener('click', e => {
    e.preventDefault()
    if (timer.isOn) {
      timerReset.classList.toggle('disabled')
      timerStart.innerText = 'Start'
      timer.stop()
    } else {
      timerReset.classList.toggle('disabled')
      timerStart.innerText = 'Stop'
      timer.start()
    }
  })

  timerReset.addEventListener('click', e => {
    if (!timer.isOn) {
      e.preventDefault()
      timer.reset(minutes || 15)
    }
  })

  saveForm.addEventListener('click', e => {
    e.preventDefault()
    // Set goal
    if (goalInput.value == '') {
      goal.classList = 'goal none'
      goal.innerText = 'No goal set'
    } else {
      goal.classList = 'goal'
      goal.innerText = goalInput.value
    }

    // Set minutes
    if (minutesInput.value == '') {
      minutes = 15
    } else {
      minutes = parseInt(minutesInput.value)
    }
  })

  resetForm.addEventListener('click', e => {
    // Clear goal
    goalInput.value = ''
    goal.classList = 'goal none'
    goal.innerText = 'No goal set'

    // Clear minutes
    minutesInput.value = ''
    minutes = 15
  })
})
