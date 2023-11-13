'use srtict'


const appData = {

    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 50,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},

    isString: function(str){ 
        return isNaN(str)
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },

    asking: function () {
        let name = ''
        let price = 0

        do {
            appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
        } while(this.isNumber(this.title))

        for (let i = 0; i < 2; i++) {
            do {
                name = prompt('Какие типы экранов нужно разработать?', 'Пример: Простые, Сложные, Интерактивные')
            } while(this.isNumber(name))

            do {
                price = prompt('Сколько будет стоить данная работа?')
            }
            while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price})

        }

        for (let i = 0; i < 2; i++) {
            let name = ''
            let price = 0

            do {
                name = prompt('Какой допольнительный тип услуги нужен ?')
            } while(this.isNumber(name))
            

            do {
                price = prompt('Сколько это будет стоить?')
            } while (!appData.isNumber(price))

            appData.services[name + i] = +price   // по-другому что-то пока не дошло как  сделать так,чтобы при передаче в объект одинакового ключа не было перезаписи =(
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?')
    },

    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (key in appData.services) {
            appData.allServicePrices += this.services[key]
        }

    },


    getFullPrice: function () {
        appData.fullPrice = (appData.screenPrice + appData.allServicePrices)
    },

    getServicePercentPrices: function () {
        appData.servicePercentPrice = (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)))

    },

    getTitle: function () {
        appData.title = (appData.title.trim()[0].toUpperCase() + appData.title.slice(1).toLowerCase())
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
    logger: function () {
        console.log(this.fullPrice)
        console.log(this.servicePercentPrice)
        console.log(appData.screens)
        console.log(appData.services)
        for (key in appData) {
            if (typeof appData[key] == 'function') {
                console.log('Метод: ' + key)
            } else {
                console.log('Свойство: ' + key)
            }
        }


    },

    start: function () {
        appData.asking()
        appData.addPrices()
        appData.getFullPrice()
        appData.getServicePercentPrices()
        appData.getTitle()
        appData.logger()
        
    },

}

appData.start()