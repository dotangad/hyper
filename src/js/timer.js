export default function Timer({ elem, delay, minutes }) {
  // Declare all the variables we'll need
  let offset, time, interval
  minutes = (minutes || 15) * 60 * 1000
  delay = delay || 10
  elem = elem || document.querySelector('body')
  this.isOn = false

  // Zerofill function
  const zf = (n, d) => {
    n = String(n)

    while (n.length < d) {
      n = `0${n}`
    }

    return n
  }

  // Format time when given ms
  this.timeFormatter = time => {
    const d = new Date(time)
    return `${zf(d.getMinutes() - 30, 2)} : ${zf(d.getSeconds(), 2)}`
  }

  // This is the function which runs in the interval
  const update = () => {
    // We only want to update if the timer is on
    if (this.isOn) {
      // Calculate how much time has passed since this.start() ran
      time = offset - Date.now()
    }

    // Update the element
    elem.innerText = this.timeFormatter(time)
  }

  this.start = () => {
    interval = setInterval(update.bind(this), delay)
    this.isOn = true
    offset = Date.now() + minutes
  }

  this.stop = () => {
    // Stop the interval is the timer is on
    if (this.isOn) {
      clearInterval(interval)
      interval = null
      this.isOn = false
    }
  }

  this.reset = newMinutes => {
    // Set minutes again if passed
    minutes = newMinutes * 60 * 1000 || minutes
    offset = Date.now() + minutes
    time = offset - Date.now()
    update()
  }
}
