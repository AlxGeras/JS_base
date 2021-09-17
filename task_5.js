function sum(num_1, num_2) {
    return num_1 + num_2
}
function diff(num_1, num_2) {
    return num_1 - num_2
}
function mult(num_1, num_2) {
    return num_1 * num_2
}
function div(num_1, num_2) {
    return num_1 / num_2
}

/**
 * Функция реализовывающая основные 4 арифметические операции 
 * (+, -, /, *)
 * @param {*} arg1 // первое число
 * @param {*} arg2 // второе число
 * @param {*} operation // операция ('+', '-', '*', '/')
 */

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2)
        case '-':
            return diff(arg1, arg2)
        case '*':
            return mult(arg1, arg2)
        case '/':
            return div(arg1, arg2)
    }

}