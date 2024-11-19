// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']

const ul = document.createElement('ul')

countries.forEach((country) => {
  const li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
})

document.body.appendChild(ul)

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const removeMeElement = document.querySelector('.fn-remove-me')
if (removeMeElement) {
  removeMeElement.remove()
}

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divPrintHere = document.querySelector('[data-function="printHere"]')
const carUl = document.createElement('ul')
cars.forEach((car) => {
  const li = document.createElement('li')
  li.textContent = car
  carUl.appendChild(li)
})
divPrintHere.appendChild(carUl)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countryData = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

countryData.forEach((country) => {
  const countryDiv = document.createElement('div')

  const h4 = document.createElement('h4')
  h4.textContent = country.title
  countryDiv.appendChild(h4)

  const img = document.createElement('img')
  img.src = country.imgUrl
  countryDiv.appendChild(img)
  document.body.appendChild(countryDiv)
})

// 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.
const removeLastButton = document.createElement('button')
removeLastButton.textContent = 'Eliminar último div'
removeLastButton.onclick = function () {
  const allDivs = document.querySelectorAll('div')
  // Eliminar el último div si hay alguno
  if (allDivs.length > 0) {
    allDivs[allDivs.length - 1].remove()
  }
}

document.body.appendChild(removeLastButton)

// 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const allDivs = document.querySelectorAll('div')

allDivs.forEach((div) => {
  const removeButton = document.createElement('button')
  removeButton.textContent = 'Eliminar este div'
  removeButton.onclick = function () {
    div.remove()
  }
  div.appendChild(removeButton)
})
