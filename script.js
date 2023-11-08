'use srtict'

let title
let screens
let screenPrice
let adaptive

let rollback = 50
let allServicePrices
let fullPrice
let servicePercentPrice
let service1
let service2

const isNumber = function (num) {
    return !isNaN(parseFloat(num) && isFinite(num))
}

const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    screens = prompt('Какие типы экранов нужно разработать?', 'Пример: Простые, Сложные, Интерактивные')
    do {
        screenPrice = +prompt('Сколько будет стоить данная работа?')
    }
    while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?')
}

const getAllServicePrices = function () {
    let sum
    let saveNum = 0
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой допольнительный тип услуги нужен Service 1?')
        } else if (i === 1) {
            service2 = prompt('Какой допольнительный тип услуги нужен Service 2?')

        }
      
            sum = +prompt('Сколько это будет стоить?')

            while(!isNumber(sum)){
                sum = +prompt('Сколько это будет стоить?')
            }

            saveNum += sum
    }
    return saveNum
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
}

const getFullPrice = function () {
    return (screenPrice + allServicePrices)
}

const getServicePercentPrices = function () {
    return (fullPrice - (fullPrice * (rollback / 100)))

}

const getTitle = function () {
    return (title.trim()[0].toUpperCase() + title.slice(1).toLowerCase())
}

const getRollbackMessage = function (price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } 
    
    if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
    }
    
    if (price < 15000 && price >= 0) {
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }

}

asking()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()
title = getTitle()

showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

console.log("allserviceprice", allServicePrices)
console.log(getRollbackMessage(fullPrice))
console.log(screens.toLocaleLowerCase().split())
