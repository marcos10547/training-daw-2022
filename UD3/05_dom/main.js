window.onload = () => {
console.log('start')

// Listar todos los divs
const divs = document.getElementsByTagName('div')
console.log(`divs ${divs.length}`);

for (const node of divs) {
console.log(node.innerHTML);

}

// Listar todos los elementos con style == 'buttons'
const style = document.getElementsByClassName('buttons')
console.log(`elementos con la clase buttons ${style.length}`)

// Listar 1 div con class == buttons
const button = document.querySelector('div.buttons')
console.log(`Primer div con la clase buttons ${button.innerHTML}`)

// Listar TODOS los divs con class == buttons
const buttons = document.querySelectorAll('div.buttons')
console.log(`Todos los divs con la clase buttons ${buttons.length} ${buttons}`)

for (const node of buttons) {
    console.log(node.innerHTML)
}

}