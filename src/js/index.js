import '../less/main.less'
import Icon from '../img/hyper.png'

let settingsOpen = false

function toggleSettings() {
  settingsOpen = !settingsOpen
  document.querySelector('.settings').classList.toggle('show')
  document.querySelector('.overlay').classList.toggle('show')
}

document.addEventListener('DOMContentLoaded', e => {
  // Set Favicon
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement('link')
  link.type = 'image/png'
  link.rel = 'icon'
  link.href = Icon

  document.querySelector('head').appendChild(link)
  document.querySelector('.settings .toggle').addEventListener('click', e => {
    e.preventDefault()
    toggleSettings()
  })
})
