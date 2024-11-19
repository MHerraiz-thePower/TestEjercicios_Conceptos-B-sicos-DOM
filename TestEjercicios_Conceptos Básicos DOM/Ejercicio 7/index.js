const places = ['Gondor', 'Mordor', 'Rivendel', 'La Comarca', 'Nümenor']

const targetDiv = document.querySelector('div[data-function="printHere"]')

const ul = document.createElement('ul')

places.forEach((place) => {
  const li = document.createElement('li')
  li.textContent = place
  ul.appendChild(li)
})

targetDiv.appendChild(ul)
