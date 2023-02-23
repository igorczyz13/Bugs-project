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

function Car(color) {
    this.color = color
    this.mileage = 0
}

Car.prototype.drive = function (distance) {
    this.mileage += distance
}

const myCar = new Car('red')
myCar.drive(1000)

console.log(myCar);

// ----------------------------------- Bug #009

function reducer(accumulator, currentValue) {
    currentValue += 1

    return accumulator + currentValue
}

const numbers = [1, 2, 3]
const sum = numbers.reduce(reducer)

console.log(sum)

// ----------------------------------- Bug #010

function returnDummyObject() {
    return {
        foo: "bar"
    }
}

console.log(returnDummyObject())

// ----------------------------------- Bug #011

const loggedUser = {
    role: "reader",
}

function getUserPermission(user) {
    let permission

    switch (user.role) {
        case "reader":
            permission = "can read"
        case "writer":
            permission = "can write"
        case "admin":
            permission = "can everything"
    }

    return permission
}

console.log(getUserPermission(loggedUser))

// ----------------------------------- Bug #012

const user1 = {
    name: "John",
}
const user2 = {
    name: "John",
}

console.log(user1 == user2)

// ----------------------------------- Bug #013

const lis = document.querySelectorAll('li')

lis.map((li) => {
    const updatedText =
    li
    .innerText
    .replace('item', 'element')

    li.innerText = updatedText
})