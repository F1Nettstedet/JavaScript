'use srtict'

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?','Пример: Простые, Сложные, Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой допольнительный тип услуги нужен Service 1?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой допольнительный тип услуги нужен Service 2?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let rollback = 50
let fullPrice =  0
let servicePercentPrice = 0
let allServicePrices = 0


const showTypeOf = function(variable) {
    console.log(variable,typeof variable)
}

const getRollbackMessage = function(price) { 
    if( price >=  30000){
        return 'Даем скидку в 10%'
    } else if(price >= 15000 && price < 30000 ){
        return 'Даем скидку в 5%'
    } else if(price < 15000 && price >= 0){
        return 'Скидка не предусмотрена'
    } else {
        return 'Что-то пошло не так'
    }
    

}

const getAllServicePrices = function(serviceOne,serviceTwo) { 
    return allServicePrices = serviceOne + serviceTwo

}

function getFullPrice(sumScreenPrice,sumAllServicePrices) { 
    return fullPrice = sumScreenPrice + sumAllServicePrices
}

const getTitle = function() { 
    return title.trim()[0].toUpperCase() + title.slice(1).toLowerCase()
}

const getServicePercentPrices = function(sumFullPrice,sumRollback) { 
    return servicePercentPrice = Math.ceil(sumFullPrice - (sumFullPrice *(sumRollback / 100)))

}


showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)


console.log(getAllServicePrices(servicePrice1,servicePrice2))
console.log("Сумма верстки и доп услуг =  " + getFullPrice(screenPrice,allServicePrices))
console.log('Название проекта ' + getTitle())
console.log("Скидка пользователю  = " + getRollbackMessage(fullPrice))
console.log("Итогая стоимость с вычетом отката = " + getServicePercentPrices(fullPrice,rollback))
console.log(screens.toLocaleLowerCase().split())







