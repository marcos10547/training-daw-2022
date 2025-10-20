window.onload = function(e) {
    console.log('documento cargado')
// Cambiar el titulo del segundo h2
const tituloh2 = document.getElementsByTagName('h2')
tituloh2[1].textContent = 'Testingggggggg'
// Seleccionar el elemento con id == username
const idUsername = document.getElementById('username')
console.log(idUsername)
// Cambiar el color de todos los first que estén dentro de un articulo
const colores = document.querySelectorAll('article .first');
colores.forEach(color => {
    color.style.color = 'red'
});
// Seleccionar todos lo elementos li con class == item
const liItems = document.querySelectorAll('li.item')

// Seleccionar todos lo buttons dentro de class buttons
const buttonsClass = document.querySelectorAll('.buttons button')
console.log(buttonsClass);
// Cambiar el color de fondo del primer párrafo
const firstP = document.querySelector('p')
firstP.style.background = 'yellow'
// Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
const forecolorButton = document.querySelectorAll('.buttons button')
forecolorButton.forEach(element => {
    element.style.color = 'red'
});
    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}