// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.getElementById('btnToClick')
button.addEventListener('click', (event) => {
  console.log('Click event:', event)
})

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('.focus')
focusInput.addEventListener('focus', (event) => {
  console.log('Focus event value:', event.target.value)
})

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const inputValue = document.querySelector('.value')
inputValue.addEventListener('input', (event) => {
  console.log('Input event value:', event.target.value)
})
