// funksiya (function) verilmis meqsede catmaq ucun, yazilmis kodlardan ibaret bir blokdur
// function salamla() { // funksiyaya ad verende mutleq () - moterizeler yazilmalidi
// document.write('salam')
// }
// call
// salamla() // yaratdigimiz funksiyani called etmek ucun bele yazmaq lazimdir

// function sum() {
//     document.write(5 + 4)
// }
// sum();

// local variable 
// global variable

// let ad = 'ramin'; // bu indi global variable dadi
// function salamla() { // bu scope un icerisine duwenler local variable dadi
//     //eger basda olan let ad = 'ramin' function scopunun icerisinde olsaydi document.write iwlemeyecekdi
//     document.write(`salam ${ad}`) 
// }
// document.write(`${ad}`)
// salamla()

// let lang = 'javascript'

// function myData () {
//    const lang = 'python'
//    document.write(lang)
// }
// myData(); // python myData in icerisinde (localda) oldugu ucun ekranda python cixacaq
// console.log(lang); // bu ise globalda oldugu ucun javascript cixacaq

/* PARAMETRLER */

// let ad = prompt('adini qeyd et') // 5. burda prompt globalda oldugu ucun scope-in icerisindeki ada daxil deyl
// function salamla(ad) { // 2. burda ise hemin gonderdiyimi qebul etmeliyem, bu ise adlanir arqument, artiq ad tegi oldu ramin ad = 'ramin'
//     document.write(`salam ${ad} <br/>`) // 3. ve men burda deyecemki salam ad, ve ekrana salam ramin cixacaq 
// }
// salamla('ramin') // 1. bura gonderdiyim ad adlanir parametr, burdan salamlanin icine parametr yollayiram
// salamla('kamal') // 4. burda ise elave salam kamal cixacaq bitisik.
// salamla(ad) // 6. bu artiq globaldaki promptda aiddir

// function salamla (ad = 'kek', urekSozleri = 'mesaj gonderilmeyib') { // 1. burda vergulden sonraki teg ikinci parametrdir
//    document.write(`salam ${ad}, ${urekSozleri} <br />`) // 
// }
// salamla("ramin","!(javascript ela dildir)") // 2. burda "ramin" birinci parametr - ad tegine aid olur, vergulden sonraki ise ikinci parametre aid olur - urekSozleri.
// salamla("kamal",) // 3. burda tekce 1ci parametre ad verildiyi ucun ekrana kamal, sonra ise undefined - yeni ikinci parametr verilmeyib onun ucun undefind cixacaq
// salamla() // 5. function salamla (ad = 'kek', urekSozleri = 'mesaj gonderilmeyib') - eger birinci parametre (ad = 'kek') her hansisa ad teyin edilibse yeni bir call-a yeni salamla() bucur yazilsa (icerisinde parametre ad teyin edilmese) onun yerine hemen ad='kek' yazdigimiz ad gelecek
// // 4. eger undefined yerine mesaj yazmaq isteyirsizse en bawda olan ikinci parametre (urekSozler = mesaj gonderilmeyib) bu cur yaza bilersiz, buna default parametrler deyilir.

/* PRAKTIKA */

// const username = prompt('adinizi daxil edin');
// const lang = prompt('program dilini daxil edin');

// function userInfo( ad, dil = 'html' /* 1. burda ad, dil yazmaqla username i ad, lang ise dil parametrine yoneltmek olar
//     2. dil = 'html' yazdigimizda en asagida userInfo yerinde lang yazmamisiqsa onun yerine avtomatik html sozunu verecek */) {
//     document.write(`${ad} ${dil} dilini cox sevir`)
// }
// userInfo(username, lang) // burda usarname ve lang onun ucun yazilirki ekrana onlarin value nu getirsin

// CALCULATOR

// const number1 = +prompt('birinci reqemi daxil et')
// const operator = prompt('operatoru daxil et')
// const number2 = +prompt('ikinci reqemi daxil et')

// function calc(n1, o, n2 /*burda operatorlari qeyd etdik*/) {
//     switch (o /*neyi yoxlayiram ? operatoru. ona gorede o yazdiq ora*/) {
//         case "+": // case + olsa ekrana yazdirsin
//             doc  ument.write(n1 + n2);
//             break;
//         case "-": // case - olsa ekrana yazdirsin
//             document.write(n1 - n2);
//             break;
//         case "*": // case * olsa ekrana yazdirsin
//             document.write(n1 * n2);
//             break;
//         case "/": // case / olsa ekrana yazdirsin
//             document.write(n1 / n2);
//             break;
//         default: document.write('bele operator yoxdur')
//     }
// }
// calc(number1, operator, number2)

// const number1 = +prompt('birinci reqemi daxil et')
// const operator = prompt('operatoru daxil et')
// const number2 = +prompt('ikinci reqemi daxil et')

// function calc(n1, o, n2 /*burda operatorlari qeyd etdik*/) {
//     switch (o /*neyi yoxlayiram ? operatoru. ona gorede o yazdiq ora*/) {
//         case "+": // case + olsa ekrana yazdirsin
//             document.write(`${n1} + ${n2} = ${n1 + n2}`);
//             break;
//         case "-": // case - olsa ekrana yazdirsin
//             document.write(`${n1} - ${n2} = ${n1 - n2}`);
//             break;
//         case "*": // case * olsa ekrana yazdirsin
//             document.write(`${n1} * ${n2} = ${n1 * n2}`);
//             break;
//         case "/": // case / olsa ekrana yazdirsin
//             document.write(`${n1} / ${n2} = ${n1 / n2}`);
//             break;
//         default: document.write('bele operator yoxdur')
//     }
// }
// calc(number1, operator, number2)

// FUNCTION 2 CI HISSE

// function salamla(user) {
// document.write(`salam ${user}`)
// }
// salamla("kamal" /* burda kamal sozu parametrdir, bawdaki user ise arqumentdir, user = "kamal" oldu indi */)

// function salamla(user = 'admin') {
//    return `salam ${user}`
// }
// document.write(salamla())// burda salamla() salam admin e beraberdir

// function sum(a,b) {
//     console.log(a + b);
//     return`salam` // burda asagidaki sum(5,6) yerine salam yazilir
// }
// console.log (sum(5,6))

// Task-01
// 1. İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// 2.İstifadəçi adını parametr kimi qəbul edən və konsola «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

// function userOnline (username /* 1. burda parametre aid arqument yazdiq */) {
//    return `${username} is active now` //2.
// }
// console.log(userOnline('kamal' /*1.1 burda parametri yaratdiq*/));
// document.write(userOnline('kamal' /*1.1 burda parametri yaratdiq*/));
// alert(userOnline('kamal' /*1.1 burda parametri yaratdiq*/));

// burda kamal sozu username e beraber oldu return ise ardinca is active now sozunu yazdi

// ADLANDIRMALAR

//show - ekranda gostermek

// function showName(name) {
//     return name
// }
// document.write(showName('kamal'))

//get - her hansisa bir deyeri, datani bize qaytaran funksiya

// function getName () {
//     return "kamal"
// }
// document.write("salam " + getName()) // burda bize kamal sozunun qaytarir yeni ekrana salam kamal cixacaq

// function checkCar(car) {
//     if (car !== 'mercedes'){ // eger masin mercedes se ekrana qaytar (return)
//         return 'olmaz'
//     }
//     return 'olar'
// }
// document.write(checkCar('bmw'))

// function isEven(n) {
//     if (n % 2 == 0) {
//         return true
//     }
//     return false
// }
// document.write(isEven(8));
// // document.write(isEven(8));

// function isEven(n) {
//     return !(n % 2) ? true : false
// }
// document.write(isEven(8));

// function isEven(n) {
//     return !(n % 2)
// }
// document.write(isEven(7));

// EXPRESSIONS

//Function declaretion
// const a = "kamal" -> stirng expression
// const b = 1       -> number expression
// const c = true    -> boolean expression

// const isEven = function(n){
//     return
// } // funcsion expression

// anonim expressionlar ne arqument alir nede return, sadece console ve ya ayri bir yere yazdirir

// arrow function =>

// const isEven = () => {
// }
// numuneler
// const isEven = (n) => !(n % 2)

// const sum = function(a,b) {
//     return a + b 
// } // bu adlanir function expression

// const sum = function() {
//     console.log(6 + 8);
// } // arqument ve return olmayan functionlar anonym functionlardi

// const sum = (a,b) => {
// return a + b
// }
// console.log(sum(3,4)); // arrow function

// CALL BACK FUNCTION - funksiyanin funksiyaya arqument olaraq oturulmesi

// const checkCar = (carName, ok, error /* 2.1 2ed elave funkisyani bura elave edirik*/) => {
//     if (carName !== "mercedes") {
//         error() // 3.1 yox masini mercedes doylse error funksiyasi isleyecek, kohne kod - alert('bu masin standartlara uygun deyil') // 1. biz bunu ayri funksiyaya cixarda bilerik
//     } else {
//         ok() // 3. eger istifadeci masini mercedesdise ok funksiyasi isleyecek, kohne kod - alert('sen artiq aramizdasan')
//     }
// }

// checkCar(
//     "bmw", // 4. bura biz birinci deyeri bmw gondermisik,   // 2. bura 2ed funksiya gonderecekeyik
//     function () {
//         alert("sen artiq aramizdasan") // 4.1 bu ikinci deyer - bu oldu ok funksiyasi
//     },
//     function(){
//         alert('standartlara uygun deyl') // 4.2 bu ucuncu deyer - error funksiyasi
//     }
// ) 

// qisa yazilma

// const a = () => alert("sen artiq aramizdasan")
// const b = () => alert("standartlara uygun deyil")
// checkCar("bmw",a,b)

// checkCar (
//     'bmw',
//     () => alert("sen artiq aramizdasan"),
//     () => alert("standartlara uygun deyil")
// );

// numune 2

// const checkStudent = (name, activity, success, unsuccess) => {
//    if(activity === "ders oxumaq") {
//     success()
//    } else if (activity === "ders oxumamaq") {
//     unsuccess()
//    }
// }
// checkStudent (
//     /* name - */ "kamal", /* activity si - */ "ders oxumaq",
//     () => alert("kamala ehsen")   /* succesi alert ile yaziriq*/,
//     () => alert("daha cox calis") /* unsuccesi alert ile yaziriq*/
// )

// rock paper scissors

// const game = (user1, user2, winnerFunc, drawFunc) => { // 1. game adinda (arrow) function yaradiriq
//     if (user1 === 'paper' && user2 === 'rock') {
//         winnerFunc(user1)
//     } else if (user1 === 'scissors' && user2 === 'paper') {
//         winnerFunc(user1)
//     } else if (user1 === 'rock' && user2 === 'scissors') {
//         winnerFunc(user1)
//     } else if (user2 === 'paper' && user1 === 'rock') {
//         winnerFunc(user2)
//     } else if (user2 === 'scissors' && user1 === 'paper') {
//         winnerFunc(user2)
//     } else if (user2 === 'rock' && user1 === 'scirssors') {
//         winnerFunc(user2)
//     } else {
//         drawFuncF()
//     }
// }

// const user1 = prompt("(rock / paper / scrissors");
// const user2 = prompt("(rock / paper / scrissors");

// const WINNER_FUNC = (winner, looser) => {
//     document.write(`winner is ${winner} <br /> looser is ${looser}`)
// }
// const DRAW_FUNC = () => {
//     document.write(`hec kim qalib gelmedikk`)
// }

// game()


// Функции являются одним из фундаментальных элементов JavaScript, обеспечивающих возможность организации и повторного использования кода. Рассмотрим основные аспекты работы с функциями в JavaScript.

// Объявление функций
// В JavaScript функции можно объявлять несколькими способами:

// Функциональное выражение (Function Expression)
// javascript
// Copy code
// const myFunction = function() {
//     console.log('Hello, world!');
// };
// myFunction(); // Вызов функции
// Функциональное объявление (Function Declaration)
// javascript
// Copy code
// function myFunction() {
//     console.log('Hello, world!');
// }
// myFunction(); // Вызов функции
// Стрелочные функции (Arrow Functions)
// javascript
// Copy code
// const myFunction = () => {
//     console.log('Hello, world!');
// };
// myFunction(); // Вызов функции
// Параметры и аргументы функций
// Функции могут принимать параметры, которые передаются при вызове.

// javascript
// Copy code
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet('Alice'); // Hello, Alice!
// Возврат значения из функции
// Функции могут возвращать значения с помощью ключевого слова return.

// javascript
// Copy code
// function sum(a, b) {
//     return a + b;
// }
// const result = sum(3, 4); // result будет равно 7
// Вложенные функции
// Функции могут быть вложены друг в друга, создавая замыкания (closures).

// javascript
// Copy code
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log(`Outer variable: ${outerVariable}`);
//         console.log(`Inner variable: ${innerVariable}`);
//     };
// }
// const newFunction = outerFunction('outside');
// newFunction('inside');
// Анонимные функции
// Анонимные функции не имеют имени и часто используются в качестве аргументов для других функций.

// javascript
// Copy code
// setTimeout(function() {
//     console.log('This is a delayed message.');
// }, 1000);
// Стрелочные функции
// Стрелочные функции предлагают более краткий синтаксис и не имеют своего контекста this.

// javascript
// Copy code
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// Rekursiv funksiyalar 
// ozunu cagira bilen funksiyalara rekursiv funksiyalar deyilir.