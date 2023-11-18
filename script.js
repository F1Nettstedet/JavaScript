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
    isError : false,
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
    countScreen : 0,
    start: function () {
        appData.addScreens()
        if(appData.isError === false){
        appData.addServices()
        appData.addPrices()
        appData.showResult()
        appData.logger()

        }
        
       // appData.getServicePercentPrices()
       // appData.logger()
    },
    

    init : function () { 
        appData.addTitle()
        startBtn.addEventListener('click', appData.start)
        getScreenBtn.addEventListener('click',appData.addScreenBlock)
        appData.scrollRollback()
        
    },

    scrollRollback : function(){
        getRollback.addEventListener('input',function(e){
            getSpan.innerHTML = e.target.value + '%'
            appData.rollback = +e.target.value 
        })
        
    },

    addTitle : function () {
        document.title = title.textContent

    },
    
    showResult : function () { 
        total.value = appData.screenPrice
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber
        fullTotalCount.value = appData.fullPrice
        totalCountRollback.value = appData.servicePercentPrice
        totalCount.value = appData.countScreen
    },

    addScreens : function () { 
        
        appData.screens = []
        screens = document.querySelectorAll('.screen')
        screens.forEach(function(screen, index){
           
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

           
            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count: +input.value
                
            }) 
        })

        for(let key in appData.screens){
            if(appData.screens[key].count === 0 && appData.screens[key].name === 'Тип экранов'){
                appData.screens = []
                alert('ошибка')
                isError = true
            }else{
                isError = false
            }

        }


    },

    addScreenBlock : function () {
        appData.screens = []
        screens = document.querySelectorAll('.screen')
        cloneScreen = screens[0].cloneNode(true)
        screens[screens.length - 1].after(cloneScreen)

        
    },

    addServices: function(){
        appData.servicesNumber = {}
        appData.servicesPercent = {}
    
        getOtherItemsPercent.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if(check.checked){
                appData.servicesPercent[label.textContent] = +input.value
            }
            
        })
       
        getOtherItemsNumber.forEach(function(item){
            const check = item.querySelector('input[type=checkbox]')
            const label = item.querySelector('label')
            const input = item.querySelector('input[type=text]')
            if(check.checked){
                appData.servicesNumber[label.textContent] = +input.value
            }
          
            
        })
        

    },

    addPrices: function () {
        appData.screenPrice  = this.screens.reduce(function(acc,i){
            return acc +  (+i.price)

        },0)

        appData.countScreen = this.screens.reduce(function(acc,i){
            return acc + (+i.count)
        },0)


        
        for (key in appData.servicesNumber) {
            appData.servicePricesNumber += this.servicesNumber[key]
        }

        for (key in appData.servicesPercent) {
            appData.servicePricesPercent +=  appData.screenPrice * (appData.servicesPercent[key] / 100)
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesPercent  + appData.servicePricesNumber

        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))


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
 
