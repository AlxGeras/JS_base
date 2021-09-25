'use strict'

class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    make25PercentDiscount() {
        this.price *= 0.75
    }
}


let product_1 = new Product('item_1',100)

console.log(product_1.price)

product_1.make25PercentDiscount()

console.log(product_1.price)