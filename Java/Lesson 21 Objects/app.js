// Data types
// Data tipler 2 hisseye bolunur - primitiv data tipler, referans data tipler
// Primitivler

// Object yaratmagin 2 novu var
// let userInfo = new Object();
// let userInfo = {};

// key: value
// let userInfo = {
// name: "Kamal",
// age: 30,
// "likes Javascript": true,
// };


// Object cagirma qaydasi
// console.log(userInfo); // Burda console userInfo icinde olan hamisini cixardacaq
// console.log(userInfo.name); // Burda ise ancaq adi cixardacaq
// console.log(userInfo["likes javascript"]); // burdada true cixacaq

// let firstpart = "likes";
// let userInfo = {
//    name: "Kamal",
//    age: 30,
//    [firstpart + " javascript"]: true,
// };

// console.log(userInfo["likes javascript"]); // true cixardacaq

// let key = "name";
// console.log(userInfo[key]); // consola Kamal cixardacaq
// // console.log(userInfo.key); // bele halda undefined cixardacaq

// let userInfo = {
//     let: "Kamal",
//     for: 30,
// };

// console.log(userInfo.let); // consola kamal cixacaq
// console.log(userInfo.for); // consola 30 cixacaq

// let userInfo = {
//     0: "Kamal", // bu halda 0 string kimi isledilir 0 eyni hemen "0" 
// };
// console.log(userInfo[0]); // Ekrana kamal cixacaq
// console.log(userInfo["0"]); // Ekrana kamal cixacaq

// SYMBOLS

// let id = Symbol("id");
// let userInfo = {
//     name: "kamal",
//     age: 30,
//     [id]:"некое значение" // Consola Symbol(id): "Некое значение" cixacaq.
// };
// console.log(userInfo);

// let userInfo = {
//     name: "kamal",
//     age: 30,
//     address: {
//         city:"Uzhhorod",
//         street: "Freedom",
//     }
// }
// console.log(userInfo); // address:{...}
// console.log(userInfo.address); // city: "Uzhhorod", "street: "Freedom"
// console.log(userInfo.address.city);// Uzzhorod

// function makeUserInfo(name, age) {
//     return {
//         name: name,
//         age: age,
//         // Другие свойство
//     };
// }
// let user = makeUserInfo("Kamal", 30);
// console.log(user); // name: "kamal", age: 30

// function makeUserInfo(name, age) {
//     return {
//         name, // тоже самое что и name: name,
//         age, // тоже самое что и age: age,
//         "likes javascript": true,
//         // ... другие свойства
//     };
// }
// let user = makeUserInfo("Kamal", 30);
// console.log(user); // consola her birini cixardir

// let userInfo = {
//     name: "Kamal",
//     age: 30,
//     "Likes javascript": true
// }
// console.log(userInfo); // bu hamisini cixardacaq konsola

// // userInfo.gender = "k" // bele yeni object elave etmek olar, cagirmaq ucun ise yeniden asagida console yazmaq lazimdir

// delete userInfo.age; // bele objecti silmek olur, asagidan yene consola cagirmaq lazimdir
// console.log(userInfo);

// userinfo.age = 18; // bu cur objectin value nu deyiwmek olar, constant olanlarla bele
// console.log(userinfo);

// let user = userInfo; // burda user deyiwenini userInfo deyiwenine beraber edirik.
// console.log(user);
// user.age = 18; // burda artiq age user e duwub age i deyiwdikde userInfodada deyiwir
// console.log(userInfo); // Age evvel 30 idi user.age de deyiwdiyimiz ucun indi age 18 olacaq

// OBJECT DUBLE

// Object.assign(куда(обьект), что(свойство #1), что (свойство #2), ... и так далее)

// let userinfo = {
//     name: "Kamal",
//     age: 30,
// }

// let user = Object.assign({}, userinfo) // burda object.assign sonra {} <- bu isare yeni bow obyekt isaresidi, burdan sonra ise userInfo icinden butun datalari yeni user deyiweninin icine dublirovat edir.

// Object.assign(userInfo, {['likes javascript']: true, city: "Uzhhorod"}) // userInfonun icine bu iki eded objecti elave etdi

// PART 2

// Yaddas tipi 2 yere bolunur - stack ve heap
// value type lar stack da olur
// reference type lar ise heap de

// const user = {
//     name: "Ramin",
//     surname: "Mammadzade"
// }


// const user2 = user // user de olanlar user 2 e kopya olundu
// user2.name = 'Asiman' // user 2 ve user de name ler asiman olacaq
// // Nece etmek olar ki user2 deyiwende tekce user2 deyiwsin user toxunulmaz qalsin
// user2 = {} // burda artiq yeni bir reference yarandi

// // for metodu

// for (let x in user) {
//     console.log(x); // burda ancaq keyler consola cixacaq yeni name , surname

// }

// // for metodu kohne metoddu

// // Object.assign metodu

// const user2 = Object.assign({},user) // bu variantda user2 ucun yeni {} aciriq, user1 de olanlari onun icibe kopyalayiriq.


// // SPREAR OPERATORU

// const user2 = {...user} // bu qaydada user1 de olanlar user 2e beraber etdi
// // indi biz user2.name = 'asiman' deyiwdikde tekce user2 deyiwecek

// TAPSIRIQ

// const user = {
//     age: 56,
//     name: 'Asiman',
//     surname: 'Developer',
//     department: "development",
//     getAllName: function () {

//     }
// }

// const user2 = {}; // user 2 yaradiriq user2 yeni bir obyektdir, men bu obyekte 
// for (let keys in user) {
//     user2[keys] in user[keys] // user2 e menimsetdik user1 in datalarini
// }
// console.log("user ", user);
// console.log("user2 ", user2);
// // consola yazdiranda gorurukki her ikisinin deyeri eynidi

// // for vasitasile  user2 in value su user1 ler olsun ancaq referance ayri olsun

// // METOD MESELESI
// // 1. metod obyektin icerisindeki propertidi hansiki o funksiyadir, user obyektine metod deyilirse hemen o metod funksiya olacaq.
// // yuxaridaki kodun anlamidi
// const user1 = {
//     name: 'Asiman',
//     surname: 'Developer',
//     age: 56,
//     department: "development",
//     getAllName: function () { // 2. functiondan bize qayitsin name ve surname butun hal
//         console.log(this); // 3. this acar sozu qayitsin 
//     }
// }
// user.getAllName(); //4. bu consolda this qaytaracaq, this nedi ? bu obyektin ozu yeni obtektleri, cunki function decloration aid oldugu obyekti qaytarir, ancaq bu olsaydi arrow function bize ancaq windowu qaytaracaqdi, eger obeykde this isledeceksizse decloration ile yazin, decloration ile yazmaqsaq this evezine user iwledeceyik

// const user3 = {
//     name: 'Asiman',
//     surname: 'Developer',
//     age: 56,
//     department: "development",
//     getAllName: function () { // 2. functiondan bize qayitsin name ve surname butun hal
//         return `${this.name} ${this.surname}`
//     }
// }
// console.log(user.getAllName()); //  bele halda Asiman Developer cixacaq konsola
// MESELEN

// function a () {
//     console.log(this);
// }
// a(); bele yazdiqda error cixacaq a ya hecne teyin etmemisik deye

// bizim yuxarida user obyektim var, biz ne vaxt console.log(user.name) noqte ile cagirmaliyiq, ne vaxt kvadrat moterize ile ?
// kvadrat ile cagirditda consola undefined gelir, noqte ile cagiranda iwleyir
// eger biz deyiwen adini hardansa gotururukse mes,
// const a = name
// console.log(user.a) // bele halda yene undefined cixacaq
// console.log(user["name"]) // bele halda namein valuesunu qaytaracaq

// Rest operatoru

// function c(a, b) {
//     console.log(a);
//     console.log(b);
// }

// c(1, 2) // eger arqumentlerin sayi 2 den cox olsa nece consola cagiraq ? onun ucun parametrde axirincidan sonra "," "...others" ve yaxud istediyiniz ad.x consoleda others cagirsaq qalan nomreler "array(hele kecmemisik)" formasinda qaytaracaq.

// // Smart parametrler 
// // parametrlerle arqumentlerin yerini deyiwende proplem yaranmamasi ucun smart parametrlerden istifade edirik

// function showName(age, name, surname) {
//     console.log(name + " " + surname + ": " age);
// }
// // showName('ramin', "mammadzade", 34) // 1. (bu kohne koddu) bunun evezine bura obyekt gonderirik (sonraki kod)
// showName(
//     {
//    name: "Ramin",
//    surname: "Mammadzade",
//    age: 36
// }
// ) // Bunun neyi smartdi ? , biz yuxarida function showName(age, name, surname) evezin (obj (ve ya her hansi ad)) kimi gotureceyik ve console.log (obj.name + obj.surname + obj.age) kimi gotureceyik.

// Math.

// result = Math.floor(Math.random()*10) + 1; // random ededi asagi yuvarlasdirmaq ucun bu kod isledilir
// console.log(result); 

//Task 1

// function kokAlmaq(base, degree) {
//     return Math.pow(base, 1/degree)
// }
// console.log(kokAlmaq(8,3));


