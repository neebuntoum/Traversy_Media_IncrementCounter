const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 500
    c
    if(c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    } else {
      counter.increment = target
    }
  }
  updateCounter()
})