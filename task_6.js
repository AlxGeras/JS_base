'use strict'

let row = null

for (let i = 0; i < 20; i++) {
    row = ''
    for (let j = 0; j <= i; j++) {
        row += '*'
    }
    console.log(row)
}