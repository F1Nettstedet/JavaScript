let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?','Пример: Простые, Сложные, Интерактивные')
let screenPrice = +prompt('Сколько будет стоить данная работа?')
let rollback = 50
let fullPrice = 50000
let adaptive = confirm('Нужен ли адаптив на сайте?')



let service1 = confirm('Какой допольнительный тип услуги нужен Service 1?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = confirm('Какой допольнительный тип услуги нужен Service 2?')
let servicePrice2 = +prompt('Сколько это будет стоить?')

console.log(fullPrice = screenPrice + servicePrice1 + servicePrice2)

let servicePercentPrice = Math.ceil(fullPrice - (fullPrice *(rollback / 100)))

console.log(servicePercentPrice)

if(fullPrice >  30000){
    console.log('Даем скидку в 10%')
}else if(fullPrice > 15000 && fullPrice <= 30000 ){
    console.log('Даем скидку в 5%')
}else if(fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена')
}else if(fullPrice < 0 ){
    console.log('Что-то пошло не так')
}


alert('Hello World')

console.log('Hello World')

console.log(typeof(title),typeof(fullPrice),typeof(adaptive))

console.log(screens.length)

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани " + "\n" + "Стоимость разработки сайта " + fullPrice +  "  рублей/ долларов/гривен/юани")

console.log(screens.toLocaleLowerCase().split())

console.log(fullPrice * (rollback / 100))
