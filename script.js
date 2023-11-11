'use srtict'


const appData = {

    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',


    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Пример: Простые, Сложные, Интерактивные')
        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?')
        }
        while (!appData.isNumber)(appData.screenPrice)

        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },

    getAllServicePrices: function () {
        let sum
        let saveNum = 0
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой допольнительный тип услуги нужен Service 1?')
            } else if (i === 1) {
                appData.service2 = prompt('Какой допольнительный тип услуги нужен Service 2?')

            }

            sum = +prompt('Сколько это будет стоить?')

            while (!appData.isNumber(sum)) {
                sum = +prompt('Сколько это будет стоить?')
            }

            saveNum += sum
        }
        return saveNum
    },

    getFullPrice: function () {
        return (appData.screenPrice + appData.allServicePrices)
    },

    getServicePercentPrices: function () {
        return (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))

    },

    getTitle: function () {
        return (appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase())
    },

    getRollbackMessage: function (price) {
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

    },
    logger: function (){
        console.log(this.fullPrice)
        console.log(this.servicePercentPrice)
        for(key in appData){ 
            if(typeof appData[key] == 'function'){
                console.log('Метод: ' + key )
            }else{ 
                console.log('Свойство: ' + key)
            }
        }

    }, 

    start: function () {
        this.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle()
        this.logger()
    },
   
}

appData.start()
