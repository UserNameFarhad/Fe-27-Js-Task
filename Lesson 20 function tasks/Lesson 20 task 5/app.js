// Parametr kimi iki ədəd və riyazi əməliyyatın işarəsini qəbul edən və
// bu riyazi əməliyyatın nəticəsini qaytaran calc funksiyasını yazın.
// Məsələn, calc(4, 6, '+');  //  10 qaytaracaq

function calc(a, b, operation) {
    if (operation === '+') {
        return a + b;
    } else if (operation === '-') {
        return a - b;
    } else if (operation === '*') {
        return a * b;
    } else if (operation === '/') {
        return a / b;
    } else {
       return 'duzgun emeliyet secilmeyib'
    }
}

document.write(calc(10, 0, '/'));


