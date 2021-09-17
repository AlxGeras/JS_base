let a = parseInt(Math.random() * 100) - 50
let b = parseInt(Math.random() * 100) - 50

if (a >= 0 && b >= 0) {
    result = a - b
    alert(`Разность чисел ${a} и ${b} равна ${result}`)
}

if (a < 0 && b < 0) {
    result = a * b
    alert(`Произведение чисел ${a} и ${b} равно ${result}`)
}

if (a * b < 0) {
    result = a + b
    alert(`Сумма чисел ${a} и ${b} равна ${result}`)
}
