'use strict'

class digit_f {
    constructor(digit) {
        if (Number.isInteger(digit) && digit < 1000) {
            digit = String(digit).split('')
            for (; 3 - digit.length > 0;) {
                digit.unshift('0')
            }
            this.hundreds = digit[0]
            this.tens = digit[1]
            this.units = digit[2]
        }

        else {
            console.log('Incorrect input')
            return null
        }

    }
}

console.log(new digit_f('asdasd'))
console.log(new digit_f('1111'))
console.log(new digit_f('123'))
console.log(new digit_f(123))