let title = "JavaScript"
let screens = "Простые, Сложные, Интерактивные"
let screenPrice = 10
let rollback = 50
let fullPrice = 50000
let adaptive = false

alert('Hello World')

console.log('Hello World')

console.log(typeof(title),typeof(fullPrice),typeof(adaptive))

console.log(screens.length)

console.log("Стоимость верстки экранов " + screenPrice + " рублей/ долларов/гривен/юани " + "\n" + "Стоимость разработки сайта " + fullPrice +  "  рублей/ долларов/гривен/юани")

console.log(screens.toLocaleLowerCase().split())

console.log(fullPrice * (rollback / 100))
