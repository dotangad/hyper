import '../less/main.less'

let settingsOpen = false

function toggleSettings() {
  settingsOpen = !settingsOpen
  document.querySelector('.settings').classList.toggle('show')
  document.querySelector('.overlay').classList.toggle('show')
}

document.addEventListener('DOMContentLoaded', e => {
  document.querySelector('.settings .toggle').addEventListener('click', e => {
    e.preventDefault()
    toggleSettings()
  })
})
