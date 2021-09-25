'use strict'

function Product(name,price){
    this.name = name
    this.price = price
}

Product.prototype.make25PercentDiscount = function()  
{
    this.price *= 0.75
}

let product_1 = new Product('item_1',100)

console.log(product_1.price)

product_1.make25PercentDiscount()

console.log(product_1.price)