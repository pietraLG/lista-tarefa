const input = document.getElementById('input')
const button = document.getElementById('button')
const display = document.getElementById('display')

function inserirtarefa(){
    display.innerHTML = input.value
}

button.addEventListener("click" , inserirtarefa)