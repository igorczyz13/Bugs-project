// ----------------------------------- Bug #006

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => console.log(i))
// }

// ---- poprawna wersja

for (let i = 0; i < 10; i++) {
    setTimeout(() => console.log(i))
}

// ----------------------------------- Bug #007

// function addTax(price, tax) {
//     tax = tax || 0.23

//     return price + price * tax
// }

// const priceWithTax = addTax(100, 0)

// console.log(priceWithTax)

// ---- poprawna wersja

function addTax(price, tax = 0.23) {
    return price + price * tax
}

const priceWithTax = addTax(100, 0)

console.log(priceWithTax);


// ----------------------------------- Bug #008

// function Car(color) {
//     this.color = color
//     this.mileage = 0
// }

// Car.prototype.drive = (distance) => {
//     this.mileage += distance
// }

// const myCar = new Car("red")
// myCar.drive(1000)

// console.log(myCar)

// ---- poprawna wersja

// function Car(color) {
//     this.color = color
//     this.mileage = 0
// }

// Car.prototype.drive = function (distance) {
//     this.mileage += distance
// }

// const myCar = new Car('red')
// myCar.drive(1000)

// console.log(myCar);

// ----------------------------------- Bug #009

// function reducer(accumulator, currentValue) {
//     currentValue += 1

//     return accumulator + currentValue
// }

// const numbers = [1, 2, 3]
// const sum = numbers.reduce(reducer)

// console.log(sum)

// ---- poprawna wersja

// function reducer(accumulator, currentValue) {
//     currentValue += 1

//     return accumulator + currentValue
// }

// const numbers = [1, 2, 3]
// const sum = numbers.reduce(reducer, 0)

// console.log(sum)

// ----------------------------------- Bug #010

// function returnDummyObject() {
//     return {
//         foo: "bar"
//     }
// }

// console.log(returnDummyObject())

// ---- poprawna wersja

function returnDummyObject() {
    return {
        foo: "bar"
    }
}

console.log(returnDummyObject())

// ----------------------------------- Bug #011

// const loggedUser = {
//     role: "reader",
// }

// function getUserPermission(user) {
//     let permission

//     switch (user.role) {
//         case "reader":
//             permission = "can read"
//         case "writer":
//             permission = "can write"
//         case "admin":
//             permission = "can everything"
//     }

//     return permission
// }

// console.log(getUserPermission(loggedUser))

// ---- poprawna wersja

const loggedUser = {
    role: "reader",
}

function getUserPermission(user) {
    let permission

    switch (user.role) {
        case "reader":
            permission = "can read"
            break
        case "writer":
            permission = "can write"
            break
        case "admin":
            permission = "can everything"
            break
    }

    return permission
}

console.log(getUserPermission(loggedUser))

// ----------------------------------- Bug #012

// const user1 = {
//     name: "John",
// }
// const user2 = {
//     name: "John",
// }

// console.log(user1 == user2)

// ---- poprawna wersja

const user1 = {
    name: "John"
}
const user2 = {
    name: "John"
}

console.log(JSON.stringify(user1) === JSON.stringify(user2))
// ----------------------------------- Bug #013

// const lis = document.querySelectorAll('li')

// lis.map((li) => {
//     const updatedText =
//         li
//         .innerText
//         .replace('item', 'element')

//     li.innerText = updatedText
// })

// ---- poprawna wersja

const lis = document.querySelectorAll('li')

lis.forEach((li) => {
    const updatedText = li.innerText.replace('item', 'element')

    li.innerText = updatedText
})

// ----------------------------------- Bug #014

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log('execute with one second delay');
//     }, 1000)
// }

// ---- poprawna wersja

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log('execute with one second delay');
//     }, 1000 * i)
// }

// ----------------------------------- Bug #015

// const price = 25.65
// const shipping = 4.15
// const total = price + shipping

// console.log(total);

// ---- poprawna wersja

const price = 2565
const shipping = 415
const total = (price + shipping) / 100

console.log(total);


// ----------------------------------- Task X.0

// Stwórz w html strukture div.warpper -> ul -> 5*li, za pomoca js, dodaj do kazdego li tekst 1,2,3 itd oraz data-atrybut o nazwie ID, jako ID podaj cyfre, ktora umiescisz w li, a wiec powinno byc <li dataatrybutID='1'>1</i>, pobierz trzecie li za pomoca data-atrybutu, z poziomu trzeciego li dostan sie do div-a z klasa wrapper i wypisz go w konsoli

const liItems = document.querySelectorAll('li')
let number = 1

for (const liItem of liItems) {
    liItem.textContent = number
    liItem.dataset.id = number
    number++
}

// for(let i = 0; i < liItems.length; i++) {
//     liItems[i].textContent = number
//     liItems[i].dataset.id = number
//     number++
// }

const thirdLi = document.querySelector('[data-id="3"]')
console.log(thirdLi.closest('.wrapper'));



// ----------------------------------- Task X.1

// dodaj w pliku .html tag img (ale bez atrybutow), za pomoca odpowiednich metod w js ustaw atrybut src (wstaw jakis obrazek z internetu) pamietaj o atrybucie alt, stworz funkcje, ktora wyisze w konsoli cokolwiek, funkcja ma sie wykonywac po uplywie 2s

// const img = document.querySelector('img')

// img.setAttribute('src', 'https://unsplash.it/600/400')
// img.setAttribute('alt', 'losowy obrazek z internetu')

// const test = () => {
//     console.log('look');
// }

// setTimeout(test, 2000)

// ----------------------------------- Bug #016

// const myDog = new Dog ()
// const myCat = new Cat ()

// function Dog() {
//     this.name = 'Pluto'
// }

// class Cat {
//     constructor() {
//         this.name = 'Garfield'
//     }
// }

// console.log(myDog.name);
// console.log(myCat.name);

// ---- poprawna wersja

const myDog = new Dog()


function Dog() {
    this.name = 'Pluto'
}

class Cat {
    constructor() {
        this.name = 'Garfield'
    }
}

const myCat = new Cat()

console.log(myDog.name);
console.log(myCat.name);

// ----------------------------------- Bug #017

// setTimeout(() => {
//     console.log('Infinity');
// }, Infinity)

// setTimeout(() => {
//     console.log('24.8 days');
// }, 2147483648)

// setTimeout(() => {
//     console.log('Immediately');
// }, 0)

// ---- poprawna wersja

setTimeout(() => {
    console.log('24.8 days');
}, 2147483647)

// ----------------------------------- Bug #018

// function sum(a, a, c) {
//     return a + a + c
// }

// console.log(sum(5, 10, 15))

// ---- poprawna wersja

"use strict"

function sum(a, a, c) {
    return a + a + c
}

console.log(sum(5, 10, 15))

// ----------------------------------- Bug #019

// const Car = {
//     color: "red",
//     drive() {
//         console.log(this)
//     },
// }

// Car.drive()

// const driveMyCar = Car.drive

// driveMyCar()

// ---- poprawna wersja
const Car = {
    color: "red",
    drive() {
        console.log(this)
    },
}

Car.drive()

const driveMyCar = Car.drive.bind(Car)

driveMyCar()