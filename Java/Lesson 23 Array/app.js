// let arr = ['Asiman', 'Nihat', 'Kamal'];
// console.log(arr);

// Array ler mutable di

// let arr = ['Asiman', 'Nihat', 'Kamal'];
// arr[0] ='Kamal' // burda Asiman olacaq Kamal
// console.log(arr);

// let arr = ['Asiman', 'Nihat', 'Kamal'];
// arr.length = 10;
// arr[9] = 'Ruslan' // ['Asiman', 'Nihat', 'Kamal', empty × 6, 'Ruslan']
// console.log(arr); // kamaldan sonra empty x7

// let arr = ["Asiman", "Farhad", "Kamal", "Nicat", "Fidan", "Arzu", ]

// for (let value of arr) {
//     console.log(value);
// }

// FIFO first in first out
// LIFO Last in first out

// Array in evveline element elave etmek ve ya axirina

/*
push - axirina elave edir
pop - axirindan silir
unshift - evveline elave edir
shift - evvelinden silir
*/

// let arr = ["Asiman", "Farhad", "Kamal", "Nicat", "Fidan", "Arzu", ];
// // arr.push('Mesedi'); // arr.push arrayin sonuna elave edir
// // arr.pop() // axirinci elementi silir // indi mesedi oldugu ucun mesedini silir.
// let a = arr.pop();
// console.log(a); // Burda tekce birinci olani cixardacaq Yeni Arzunu
// console.log(arr);

// let arr = ["Asiman", "Farhad", "Kamal", "Nicat", "Fidan", "Arzu", ];
// let newArr = [];
// for (let user of arr) {
//     newArr.unshift(user)
// }
// console.log(newArr);
// console.log(arr.reverse());// siyahini tersine cevirir
// console.log(arr.includes('Asiman')); // Siyahinin icerisinde Asiman varsa true qaytaracaq
// console.log(arr.join("!")); // arrayleri bir birine ! isaresi ile birlesdirir


// 4ed prompt al, ilk ucunu arraya yazdir, 4cu prompdaki deyeri ise arrayin icerisinden sil , yoxdursa massivde bele data yoxdur.

// let users = []; // Создание пустого массива users
// const user1 = prompt('daxil et'); // Запрос первого пользователя
// const user2 = prompt('daxil et'); // Запрос второго пользователя
// const user3 = prompt('daxil et'); // Запрос третьего пользователя
// const delUser = prompt('hansini silek ?'); // Запрос пользователя, которого нужно удалить
// users.push(user1, user2, user3); // Добавление введенных пользователей в массив users
// if (users.includes(delUser)) { // Проверка, содержится ли delUser в массиве users
//     const index = users.indexOf(delUser); // Получение индекса delUser в массиве users
//     users.splice(index, 1); // Удаление пользователя из массива по найденному индексу
// }
// console.log(users); // Вывод обновленного массива в консоль


// let arr = ["Asiman", "Farhad", "Kamal", "Nicat", "Fidan", "Arzu", ];
// arr.splice(2,0, 'admin'); // 2 den basla 0 denesini sil admin elave et
// console.log(arr);



// PART 2

/* Methods
metodlari hamisi bizden callback function alir
forEach() - isi sadece elementleri sira ile yazdirmaqdir Mes:
map() - kohne arrayi deyiwdirmek ucun
every() - muqayiseni hamisi odemelidir
some() - muqayisen 1de odese olar
find() - 
filter() - tapib array kimi qaytaran
sort() - siralamaq, sortirovka

*/
// // forEach
// const arr = ['Asiman', 'Kamal', 'Nicat', 'Isi'];
// arr.forEach((user,index) => document.write(`${index + 1}. ${user} <br />`));
// user yazdigimiz arraylara verdiyimiz addir onun ferqi yoxdur ne istesen yaza bilersen.
// ikinci index nomreleridir.

// Map()

// const numbers = [1, 2, 3, 4, 5]
// const newNumbers = numbers.map((num) => num * 2)
// console.log('number: ', numbers);
// console.log('Newnumber: ', newNumbers);

// every()

// const arr = ['Asiman', 'Kamal', 'Nicat', 'Ismayil'];
// const isOK = arr.every((user) => user.length > 4);
// console.log(isOK);

// some()

// const arr = ['Asiman', 'Kamal', 'Nicat', 'Ismayil'];
// const isOK = arr.some((user) => user.length > 4);
// console.log(isOK);

// find()

// const users = ['Asiman', 'Kamal', 'Nicat', 'Ismayil'];
// const user = users.find((u) => u === 'Nicat');
// console.log(user);

// Filter()

// const users = ['Asiman', 'Kamal', 'Nicat', 'Ismayil'];
// const user = users.filter((user) => user.length >= 5)
// console.log(user);

// Sort()

// const numbers = ['Asiman', 'Kamal', 1, -15,'Nicat', 'Ismayil', 'Fexreddin', 'Babek']
// const user = numbers.sort()
// console.log(user);

// const numbers = [4,8,15,16,23,42];
// const newNumbers = numbers.sort((a,b) => b - a);
// console.log('numbers: ', numbers);
// console.log('Newnumbers: ', newNumbers);