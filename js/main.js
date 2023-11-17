const title = document.getElementsByTagName('h1')[0]

const getButton = document.getElementsByClassName('handler_btn')

const getScreenBtn = document.querySelector('.screen-btn')

const getOtherItemsPercent = document.querySelectorAll('.other-items.percent')

const getOtherItemsNumber = document.querySelectorAll('.other-items.number')

const getRollback = document.querySelector('.rollback input[type="range"]')

const getSpan = document.querySelector('.rollback span.range-value')

const getInputs = function() {
    let input = 0
    let inputs = document.getElementsByClassName('total-input')
    
    for (input in inputs) {
         inputs[input]
         }

        return inputs
}

let getScreen = document.querySelectorAll('.screen')

console.log(title)
console.log(getButton)
console.log(getScreenBtn)
console.log(getOtherItemsPercent)
console.log(getOtherItemsNumber)
console.log(getRollback)
console.log(getSpan)
console.log(getInputs())
console.log(getScreen)