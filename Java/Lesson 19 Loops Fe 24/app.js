// ternary operator
// let age = 19;
// age >= 18 ? console.log('OK') : console.log('error')

// let age = 19;
// if (age >= 18) {
//     console.log('OK')
// } else {
//     console.log ('error')
// }

// let gender = prompt('Genderinizi teyin edin')
// let firstName = prompt('Adinizi qeyd edin')
// let age = +prompt('yasinizi qeyd edin')
// let message = '';

// if (gender === 'k' || gender === 'K') {
//     message = `salam cenab ${firstName}`
// }else if(gender === 'q' || gender === 'Q') {
//     message = `salam xanim ${firstName}`
// }

// age >= 18 ? document.write(message) : document.write('yasiniz catmir...');  // Bu ternary metodudu

// if (age >= 18) {
//     message = gender === 'k' ? `salam cenab ${firstName}` : `salam xanim ${firstName}`
// } else {
//     message = 'yasiniz catmir'
// }
// console.log(message);

// loops - dovrler - bir proses tekrarini daha qisa sekilde yazmaq ucun istifade olunan kod strukturlaridi.
// dovlerin 3 tipi var - while, do while

// let i = 0;
// while /*while dovr tegidi */ (i <= 100 /*nece defe tekrarlasin ?*/) {
//     document.write(i + "<br />")
//     i++; /* i 1 reqem artib qalxmasi ucun bele kod yazilir, eger 2 reqem qalidrmaq istesez i=i+2 yazilmalidi ve ya qisa yolu i+=2*/
// }

// let i = 0;
// let cem = 0;
// while (i <= 100) { // burda reqemi 1 den 100 e kimi ekranda tekrarlamaq isteyirik, bele halda islemeyecek
//     if (i % 2 === 0) {
//         cem += i
//     }
//     i++; // islemesi ucun i-ni bir vahid artirmaq lazimdir
// }
// document.write(cem) // bu cur yazdiqda dovrde olan reqemlerin cemini toplayib ekrana yazir, neter alinir bilmemisem ancaq hele
// burda kod nece iwlediyi orgenmek ucun python tutordan orgenmek olar

// let soz = 'salam dunya'
// let startIndex = 0;
// let endIndex = soz.length;
// while (startIndex <= endIndex) {
//     document.write('*')
//     startIndex++
// }


// ve yaxud do while metodu
// let soz = 'salam dunya'
// let startIndex = 0;
// let endIndex = soz.length;
// do {
//     document.write('*')
//     startIndex++
// }while(startIndex <= endIndex)

// for(let i = 0 ; i <= 100 ; i++ ) { // i <= 100 (100e qeder olan reqemelere), i== (100e qeder ustune 1 gel)
//     document.write(i + '<br />')
// }

// let i = 1;
// let hasil = 1;

// for(i;i<=50;i++) {
//     hasil *= i
// }

// for(let i = 0 ; i <= 5 ; i++) {
//     if (i === 3) {
//         // break; // 3den sonraki reqemleri secmir burda 3 reqemi gorsenmeyecek 0 dan basladigi ucun, onun ucun doocument.write i if den yuxarida yazmaq lazimdir
//         continue // 3u cixir qalanlari sayir
//     }
//    document.write(i + '<br />')
// }

// prompt bizden admin value -u almayana kimi prompt sorucacaq
// let user = prompt('user')
// while (user !== 'admin') {
//     user = prompt('user');
// }

// let count = 50;
// let user = +prompt('reqemi daxil et')
// let cehd = 1;                 /* cehdlerini gostermek ucun yeni deyisen yaradiriq, documentdede duzeliwi edirik*/
// while (user !== count) {      /* User counta beraber olmayana kimi soruc */
//     if (user < count) {       /* eger count userden boyukdurse prompt yuxari qalx yazacaq, xeyr, user countdan boyuk olsa prompt asagi dus yazacaq */
//         user = +prompt('yuxari qalx');
//     } else {
//         user = +prompt('asagi dus');
//     }
//     cehd++                     /* burda cehdi 1 defe artirmaq lazimdir kodun islemesi ucun, eks halda reqemi 1 defeye tapdigini gosterecek */
// }

// document.write(`molodec, reqemi ${cehd} defeye tapdin`)

// let count = 50
// let user = +prompt('reqemi daxil et')
// while (user !== count) {
//     if (user < count) {
//         user = +prompt('yuxari qalx')
//     } else {
//         user = +prompt('asagi duw')
//     }
// }
// document.write(Math.ceil(2.7)) // 3 // ceil reqemim yukseldib butun edir.
// document.write(Math.floor) // 2 // asagiya dogru butun edir
// document.write(Math.round(2.9)) // 3 // butun reqem hansina yaxindirsa onu verecek
// document.write(Math.round(2.4)) // 2 // butun reqem hansina yaxindirsa onu verecek
// document.write(Math.abs(2)) // -2 // butun reqem hansina yaxindirsa onu verecek
// document.write(Math.random()) // 0 ve 1 arasinda random ededler verir
// document.write(Math.floor(Math.random() * 100)) // 1 ve 100 arasinda random reqemler verir.