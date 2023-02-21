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

const priceWithTax = addTax(100,0)

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