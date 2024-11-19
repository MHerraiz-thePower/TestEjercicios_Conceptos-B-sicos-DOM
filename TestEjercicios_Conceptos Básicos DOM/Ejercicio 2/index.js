// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div')
document.body.appendChild(newDiv)

// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement('div')
const paragraph = document.createElement('p')
paragraph.textContent = 'Esta es una nueva p dentro del div.'
divWithP.appendChild(paragraph)
document.body.appendChild(divWithP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWithMultiplePs = document.createElement('div')
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p')
  p.textContent = `Esta es la párrafo número ${i}.`
  divWithMultiplePs.appendChild(p)
}
document.body.appendChild(divWithMultiplePs)

// 1.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicParagraph = document.createElement('p')
dynamicParagraph.textContent = 'Soy dinámico!'
document.body.appendChild(dynamicParagraph)

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2Element = document.querySelector('.fn-insert-here')
h2Element.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
apps.forEach((app) => {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
})
document.body.appendChild(ul)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const elementsToRemove = document.querySelectorAll('.fn-remove-me')
elementsToRemove.forEach((element) => element.remove())

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.
const middleParagraph = document.createElement('p')
middleParagraph.textContent = 'Voy en medio!'
const divs = document.querySelectorAll('div')
divs[0].parentNode.insertBefore(middleParagraph, divs[1])

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('.fn-insert-here')
insertHereDivs.forEach((div) => {
  const innerParagraph = document.createElement('p')
  innerParagraph.textContent = 'Voy dentro!'
  div.appendChild(innerParagraph)
})
