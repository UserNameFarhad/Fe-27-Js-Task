// let obj = {
//     username: "TheCodeFather0",
//     firstname: "Ramin",
//     lastname: "Mammadzade",
//     age: "56"
// }

// const ad = document.getElementById('ad')
// const soyad = document.getElementById('soyad')
// const nick = document.getElementById('nick')

// ad.innerHTML += `<strong>${obj.firstname}</strong>`;
// soyad.innerHTML += `<strong>${obj.lastname}</strong>`;
// nick.innerHTML += `<strong>${obj.username}</strong>`;







// const obj2 = {
//     user1: { firstName: 'Admin', lastname: 'Adminovic' },
//     user2: { firstName: 'Kamal', lastname: 'Camalo' },
// }

// // const {user1,user2} = obj2
// // console.log(user1);
// // console.log(user2);

// const { user1: { firstName: f1, lastname: l1 }, user2: { firstName: f2, lastname: l2 }, } = obj2;
// console.log(f1);
// console.log(f2);



/* Использование конструкции const {user1, user2} = obj2 в вашем коде называется деструктуризацией (destructuring). Она позволяет извлекать свойства объектов и присваивать их значения переменным. Это делает код более лаконичным и удобным для чтения.

Рассмотрим этот процесс подробнее:

Объявление объекта:

const obj2 = {
    user1: {firstName:'Admin', lastname: 'Adminovic'},
    user2: {firstName:'Admin', lastname: 'Camalo'},
}
Здесь создается объект obj2 с двумя свойствами: user1 и user2. Каждое из этих свойств само по себе является объектом с полями firstName и lastname.

Деструктуризация:

const {user1, user2} = obj2
Эта строка использует деструктуризацию для извлечения значений свойств user1 и user2 из объекта obj2 и присваивания их переменным user1 и user2. То есть, после выполнения этой строки:

user1 будет ссылаться на {firstName: 'Admin', lastname: 'Adminovic'},
user2 будет ссылаться на {firstName: 'Admin', lastname: 'Camalo'}.
Вывод значений в консоль:


console.log(user1);
console.log(user2);
Эти строки выводят значения переменных user1 и user2 в консоль.

Зачем использовать деструктуризацию? Вот несколько причин:

Удобство: Позволяет извлекать значения из объекта и присваивать их переменным в одну строку, что упрощает код.
Читаемость: Код становится легче понимать, так как сразу видно, какие свойства объекта используются.
Избежание дублирования: Уменьшает количество повторений имени объекта, что делает код короче и чище.
Таким образом, деструктуризация const {user1, user2} = obj2 помогает более удобно и эффективно работать с объектами в JavaScript.

*/

// const obj2 = {
//     user1: {
//         info: {
//             phoneNumber: '0997140304'
//         }
//     }
// }

// const {user1: {info:{phoneNumber}}} = obj2

// console.log(phoneNumber);


// const obj2 = {
//     user1: { firstName: 'Admin', lastname: 'Adminovic' },
//     user2: { firstName: 'Kamal', lastname: 'Camalo' },
// }

// // // const {user1,user2} = obj2
// // // console.log(user1);
// // // console.log(user2);

// const { user1: { firstName: f1, lastname: l1 }, user2: { firstName: f2, lastname: l2 }, } = obj2;
// console.log(f1);
// console.log(f2);

// function sayHello(firstName, lastname,age) {
//     console.log(`salam, men ${firstName} ${lastname}. Menim ${age} yasim var`);
// }

// sayHello("Ramin","Mammadzade",56) // eger biz Ramin ile 56 yerini deyiwsek firstName 56, age ise Ramin olacaq. Bunun qarwisini almaq ucun Smart Parametrlerden istifade edeceyik

// Smart parametrler

// function sayHello(/*obj*/ {lastName,age,firstName}) {
//     // const {firstName, lastName, age} = obj
//     // console.log(obj);
//     console.log(`salam, men ${firstName} ${lastName}. Menim ${age} yasim var`);
// }
// const user = {
//     firstName:'Ramin',
//     lastName: "Mammadzade",
//     age: 56
// }
// sayHello(user)

// iife
// Immediately Invoked Function Expressions

// (function(ad){
//     console.log('Salam oslun iife-den ' + ad);
// })("ramin")

// Chat GPT
// Деструктуризация (деструкция) в JavaScript — это способ извлечения данных из массивов или объектов и присваивания их переменным. Это позволяет писать более компактный и читабельный код.

// ### Деструктуризация объектов

// Пример с вашим объектом `user`:

// ```javascript
// const user = {
//     firstName: 'Ramin',
//     lastName: 'Mammadzade',
//     age: 56
// };

// // Деструктуризация объекта
// const { firstName, lastName, age } = user;

// console.log(firstName); // 'Ramin'
// console.log(lastName);  // 'Mammadzade'
// console.log(age);       // 56
// ```

// Здесь `{ firstName, lastName, age } = user` означает, что мы извлекаем свойства `firstName`, `lastName` и `age` из объекта `user` и присваиваем их одноименным переменным.

// ### Деструктуризация массивов

// Пример с массивом:

// ```javascript
// const colors = ['red', 'green', 'blue'];

// // Деструктуризация массива
// const [firstColor, secondColor, thirdColor] = colors;

// console.log(firstColor);  // 'red'
// console.log(secondColor); // 'green'
// console.log(thirdColor);  // 'blue'
// ```

// Здесь `[firstColor, secondColor, thirdColor] = colors` означает, что мы извлекаем элементы массива `colors` и присваиваем их переменным `firstColor`, `secondColor` и `thirdColor`.

// ### Деструктуризация с присвоением значений по умолчанию

// Если в объекте или массиве отсутствует нужное свойство или элемент, можно указать значение по умолчанию:

// ```javascript
// const user = {
//     firstName: 'Ramin',
//     lastName: 'Mammadzade'
// };

// // age будет иметь значение 30, если его нет в объекте user
// const { firstName, lastName, age = 30 } = user;

// console.log(age); // 30
// ```

// ### Деструктуризация вложенных объектов

// Если объект содержит вложенные объекты, можно использовать деструктуризацию для извлечения данных из них:

// ```javascript
// const user = {
//     firstName: 'Ramin',
//     lastName: 'Mammadzade',
//     address: {
//         city: 'Baku',
//         country: 'Azerbaijan'
//     }
// };

// // Деструктуризация вложенных объектов
// const { firstName, address: { city, country } } = user;

// console.log(city);    // 'Baku'
// console.log(country); // 'Azerbaijan'
// ```

// ### Использование деструктуризации в функциях

// Деструктуризацию можно использовать в параметрах функции:

// ```javascript
// function sayHello({ firstName, lastName, age }) {
//     console.log(`Hello, ${firstName} ${lastName}. You are ${age} years old.`);
// }

// const user = {
//     firstName: 'Ramin',
//     lastName: 'Mammadzade',
//     age: 56
// };

// sayHello(user); // 'Hello, Ramin Mammadzade. You are 56 years old.'
// ```

// Здесь функция `sayHello` принимает объект с параметрами `firstName`, `lastName` и `age` и выводит приветственное сообщение.
