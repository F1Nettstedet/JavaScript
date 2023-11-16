const book = document.querySelectorAll('.book')
const img = document.querySelector('body')
const title = document.querySelectorAll('.book > h2')[4]
const advertising = document.querySelector('.adv')
const book2 = document.querySelectorAll('ul > li')
const book6 = document.createElement('li')
book6.textContent = "Глава 8: За пределами ES6"


book2[4].before(book2[6])
book2[4].before(book2[8])

book2[48].before(book2[55])
book2[55].after(book2[49])
book2[48].before(book2[50])
book2[48].after(book2[52])
book2[52].after(book2[53])
book2[25].append(book6)


title.textContent = "Книга 3. this и Прототипы Объектов"
img.style.backgroundImage = 'url(./image/adv.jpg)'
advertising.remove()

book[0].before(book[1])
book[2].before(book[4])
book[2].before(book[3])
book[2].before(book[5])

