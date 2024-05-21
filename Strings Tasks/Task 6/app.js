// 6.Remove all exclamation
// Funksiya yazın.Arqument olaraq string alsın,sözün içərisindəki bütün nida işarələrini silsin və sözün sonuna bir ədəd nida işarəsi əlavə etsin.
// məsələn:
// He!llo! !!FE-25 // netice olmalıdır Hello FE-25!

// const remove = (str) => {
//     return str.replaceAll("!", "")
// }

// console.log (remove("He!llo! !!FE-25"));

// Task 7

// const gerFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
// console.log(gerFirstLetter("salam"));

// Task 10

// const nameFormat = (str, l) => str.replace(str[0],l)
// console.log(nameFormat("qara", "y"));

// Task 11
const checkEmail = (e) => e.endsWith("gmail.com")
console.log(checkEmail('sjadja@gmail.com'));