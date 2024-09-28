const states = [
  'angry',
  'happy',
  'eyebrow',
  'sad',
  ''
]

let i = 0

document.querySelector('.head').addEventListener('click', (e) => {
  e.currentTarget.className = `head ${states[i]}`

  if (i === states.length - 1) {
    i = 0
  } else {
    i++
  }
})
