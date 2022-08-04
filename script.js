const input = document.getElementById('textarea')
const total = document.getElementById('total-counter')
const remaining = document.getElementById('remaining-counter')

const maxLength = input.maxLength

let inputLength = 0
total.innerText = inputLength
remaining.innerText = maxLength-inputLength

input.addEventListener('keyup', () =>{
    inputLength = input.value.length
    total.innerText = inputLength
    remaining.innerText = maxLength-inputLength
})