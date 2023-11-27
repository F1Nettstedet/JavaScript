'use srtict'

const title = document.getElementsByTagName('h1')[0]
const getScreenBtn = document.querySelector('.screen-btn')
const getOtherItemsPercent = document.querySelectorAll('.other-items.percent')
const getOtherItemsNumber = document.querySelectorAll('.other-items.number')

const getRollback = document.querySelector('.rollback input[type="range"]')
const getSpan = document.querySelector('.rollback span.range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

let total = document.getElementsByClassName('total-input')[0]
let totalCount = document.getElementsByClassName('total-input')[1]
let totalCountOther = document.getElementsByClassName('total-input')[2]
let fullTotalCount = document.getElementsByClassName('total-input')[3]
let totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens = document.querySelectorAll('.screen')





const appData = {
    isError: false,
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    countScreen: 0,
    start: function () {

        addScreens()
        if (this.isError === false) {
            addSevices()
            addPricec()
            showResult()
        }


        // appData.getServicePercentPrices()
        // appData.logger()
    },

    reset : function () {
        appData. resetInput()
        appData.resetCloneScreen()
        appData.resetShowResult()

    },

    resetInput : function () {
        
        screens.forEach((screen) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')

            select.removeAttribute('disabled')
            input.removeAttribute('disabled')
            input.value = ''
            select.value = ''

            resetBtn.style = "display: none;"
            startBtn.style = "display: block;"
        })
    },

    resetCloneScreen : function () {

        for(let i = 1; i < screens.length; i++){
            if(screens.length > 1){
                screens[i].remove()
            }
        }

    },

    resetShowResult : function () {
        const total = document.querySelectorAll('.main-total__items')

        total.forEach(function(item){
            const resetInput = item.querySelectorAll('.total-input')
            for(let i = 0; i < resetInput.length; i++){
                resetInput[i].value = "0"
            }
        })

        /*
        total.value = "0"
        totalCount.value = "0"
        totalCountOther.value = '0'
        fullTotalCount.value = '0'
        totalCountRollback.value = '0'
        */

        getOtherItemsPercent.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            check.checked = false
        })

        getOtherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            check.checked = false
        })

        getRollback.value = '0'
        getSpan.textContent = '0' + '%'

    },


    init: function () {
        this.addTitle()
        startBtn.addEventListener('click', this.start.bind(this))
        getScreenBtn.addEventListener('click', this.addScreenBlock)
        this.scrollRollback()
        this.logger()
        resetBtn.addEventListener('click', this.reset.bind(this))

    },

    scrollRollback: function () {
        getRollback.addEventListener('input', (e) => {
            getSpan.innerHTML = e.target.value + '%'
            this.rollback = +e.target.value
        })

    },

    addTitle: function () {
        document.title = title.textContent

    },

    showResult: function () {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCountRollback.value = this.servicePercentPrice
        totalCount.value = this.countScreen
    },

    addScreens: function () {

        this.screens = []
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {

            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            this.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value,
                count: +input.value

            })

            for (let key in this.screens) {
                if (this.screens[key].count === 0 && this.screens[key].name === 'Тип экранов') {
                    this.screens = []
                    alert('ошибка')
                    return this.isError = true
                } else {
                    this.isError = false
                }

            }

            select.setAttribute('disabled', 'disabled')
            input.setAttribute('disabled', 'disabled')

            resetBtn.style = "display: block;"
            startBtn.style = "display: none;"

        })

    },

    addScreenBlock: function () {
        this.screens = []
        screens = document.querySelectorAll('.screen')
        cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)
        


    },

    addServices: function () {
        this.servicesNumber = {}
        this.servicesPercent = {}

        getOtherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value
            }

        })

        getOtherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value
            }


        })

    },

    addPrices: function () {
        this.screenPrice = this.screens.reduce((acc, i) => {
            return acc + (+i.price)

        }, 0)

        this.countScreen = this.screens.reduce((acc, i) => {
            return acc + (+i.count)
        }, 0)



        for (key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key]
        }

        for (key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesPercent + this.servicePricesNumber

        this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100))

    },

    logger: function () {
        //console.log(appData.screenPrice)
        //console.log(this.fullPrice)
        //console.log(this.servicePercentPrice)
        //console.log(appData.screens)
        //console.log(appData.services)

    },


}


appData.init()

let addScreens = appData.addScreens.bind(appData)

let addSevices = appData.addServices.bind(appData)
let addPricec = appData.addPrices.bind(appData)
let showResult = appData.showResult.bind(appData)

