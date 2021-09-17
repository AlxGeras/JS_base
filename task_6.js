money = prompt('Введните количество рублей для перевода')

last_digit = money[money.length - 1]

switch (last_digit) {
    case '1':
        alert(`Ваша сумма в ${money} рубль успешно зачислена.`)
        break
    case '2':
    case '3':
    case '4':
        alert(`Ваша сумма в ${money} рубля успешно зачислена.`)
        break
    default:
        alert(`Ваша сумма в ${money} рублей успешно зачислена.`)
}
