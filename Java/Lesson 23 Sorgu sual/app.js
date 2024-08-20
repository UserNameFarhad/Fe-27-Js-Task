/* 

Primitive type
string, number, boolean, null, undefined.

= - sadece beraber
== - derelerini yoxlayir, string 1 olsada, number 1 olsada true verecek
=== - bu ise type yoxlayir
ferqleri

Stack ve heap

Стек: Примитивные типы данных.
Куча: Объекты и массивы.

null == null // True
NaN == Nan // False

let result = "0" && 1 || 0
birinci teref trucy se ikincini qaytarir yeni 1 i
and ordan birinci secilir cunki ustundur

while, for, do while

let i = 0;
do {
    console.log(i);
    i++;
} while {i < 5};


Funksiyanin novleri
1. Функции, объявленные с помощью ключевого слова function (Function Declarations)
Функции, объявленные с помощью ключевого слова function, поднимаются (hoisted) в верхнюю часть своей области видимости, что позволяет вызывать их до момента объявления.

javascript
Copy code
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Hello, Alice!

2. Функции-выражения (Function Expressions)
Функции-выражения присваиваются переменной. Они не поднимаются (hoisted).

javascript
Copy code
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Hello, Bob!

3. Стрелочные функции (Arrow Functions)
Стрелочные функции имеют более короткий синтаксис и не связывают собственное значение this.

javascript
Copy code
const greet = (name) => `Hello, ${name}!`;

console.log(greet('Charlie')); // Hello, Charlie!


*/

// let ad = prompt('Adiniz daxil edin')
// let soyad = prompt('Soyadinizi daxil edin')

// const checkUser = (ad, soyad) => {
//     const user = {
//         firstName: 'Ramin',
//         lastName: 'Mammadzade'
//     }

//     while(ad !== user.firstName && soyad !== lastName) {
//         ad = prompt('adiniz daxil edin');
//         soyad = prompt('adiniz daxil edin');
//     }
//     console.log('salam');
// }
// checkUser(ad,soyad)