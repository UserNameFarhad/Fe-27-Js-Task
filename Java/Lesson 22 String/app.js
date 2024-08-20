// let str = 'asiman'


// console.log(str[str.length - 1]); // deyiwene yazilan sozun axirinci herifini goturmek ucun.

// В JavaScript есть два типа данных: изменяемые (mutable) и неизменяемые (immutable).

// Неизменяемые типы данных означают, что их значения нельзя изменить после их создания. Примерами неизменяемых типов данных в JavaScript являются строки (string) и числа (number). Когда вы создаете строку или число и пытаетесь изменить их значение, фактически вы создаете новый объект, а не изменяете существующий.

// Изменяемые типы данных, напротив, могут быть изменены после создания. Примерами изменяемых типов данных в JavaScript являются объекты (object) и массивы (array). Вы можете изменять их содержимое, добавлять новые элементы или удалять существующие, не создавая новый объект.

// Вот пример:

// ```javascript
// // Неизменяемый тип данных (строка)
// let str = "Привет";
// str = str.toUpperCase(); // Новая строка создается при вызове метода toUpperCase()

// // Изменяемый тип данных (массив)
// let arr = [1, 2, 3];
// arr.push(4); // Массив изменяется путем добавления нового элемента
// ```

// Использование неизменяемых типов данных может обеспечить большую надежность и предсказуемость в программе, особенно при работе с параллельными процессами или в функциональном программировании.

// Eger obyektin propertisi funksiyadirsa ona deyirik metod

// В JavaScript методом называется функция, которая является частью объекта. Методы позволяют объектам выполнять определенные действия или обеспечивать определенное поведение.

// Вот пример метода в JavaScript:

// ```javascript
// let obj = {
//   name: "John",
//   age: 30,
//   greet: function() {
//     console.log("Привет, меня зовут " + this.name + " и мне " + this.age + " лет.");
//   }
// };

// obj.greet(); // Вызываем метод greet объекта obj
// ```

// Здесь `greet` является методом объекта `obj`. Он выполняет действие вывода приветствия на экран, используя свойства объекта `name` и `age`. Метод вызывается с помощью синтаксиса `объект.метод()`. В методах также может использоваться ключевое слово `this`, которое ссылается на текущий объект, в контексте которого вызывается метод.

// const str = 'ey babek kebab ye';
// let result = str.toUpperCase()
// console.log(result); // butun herifleri boyuk eden method
// str.indexOf('e') // 'e' herfi necenci indeksdedise onu qaytarir
// str.includes("babek") // soz cumlenin icerisinde olub olmadigini yoxlayir true ve false ile
// str.startsWith("e") // "e" herfi ile bawlayirmi.
// str.endsWith("e") // "e" herfi ile bitirmi .

// Bir elementin icinden bir yeri cixartmaq.

// str.slice(3,8); // 3 - b dan baslayir, 8 - k da qurtarir.// ekrana babek cixacaq
// str.slice(3) // 3cu indeksden baslayir axira kimi gedir.
// str.substring(3,8) // 3 den basla 8 e kimi/ (8,3) yazsaq yene 3den baslayib 8 e kimi gedecek.
// str.substr(2,5) // den basla 5ed goster
// str.charCodeAt(0) // simvolun acsii cedvelinde sirasini gosterir
// str.concat("text") // yazinin ardinca yazi olur.
// str.trim() // yazida bosluqlari silir.
// str.split(" ") // bosluqlara gore bolur ve arrey-e cevirir
// 
