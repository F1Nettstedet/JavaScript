const title = document.getElementsByTagName('h1')[0]
const getScreenBtn = document.querySelector('.screen-btn')
const getOtherItemsPercent = document.querySelectorAll('.other-items.percent')
const getOtherItemsNumber = document.querySelectorAll('.other-items.number')

const getRollback = document.querySelector('.rollback input[type="range"]')
const getSpan = document.querySelector('.rollback span.range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

total = document.getElementsByClassName('total-input')[0]
totalCount = document.getElementsByClassName('total-input')[1]
totalCountOther = document.getElementsByClassName('total-input')[2]
fullTotalCount = document.getElementsByClassName('total-input')[3]
totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')

console.log(title)
console.log(startBtn)
console.log(resetBtn)
console.log(getScreenBtn)
console.log(getOtherItemsPercent)
console.log(getOtherItemsNumber)
console.log(getRollback)
console.log(getSpan)
console.log(total)
console.log(totalCount)
console.log(totalCountOther)
console.log(fullTotalCount)
console.log(totalCountRollback)

console.log(screens)