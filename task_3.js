'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let discount = 15

let discount_products = products

discount_products.forEach(element => {
    element.price *= (1 + discount / 100)
});

console.log(discount_products)