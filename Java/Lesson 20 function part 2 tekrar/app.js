// function sum(a,b){
//     for(let i = 0; i <= 30; i++) {
//        if(i === 29) {
//         return i
//        }
//     }
// }
// console.log(sum(5,6));

// Task-01
// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın

// function user(username) {
//     return `${username} is active now`
// }
// console.log(user('ramin'));
// document.write(user('ramin'));
// alert(user('ramin'));

// Task-02

// function enBoyukTap(a,b,c) {
//     return Math.max(a,b,c);
// }
// console.log(enBoyukTap(10, 20, 30));
// document.write(enBoyukTap(10, 20, 30));
// alert(enBoyukTap(10, 20, 30));

// task-03

// function hesabCemi(ruble, dollar) {
//     // Dollar hesabındakı məbləği rubl cinsinə çeviririk
//     let rubleDegeri = dollar * 75;

//     // Ruble hesabı ilə rubleDegeri-ni toplayırıq
//     let toplam = ruble + rubleDegeri;

//     return "Bütün depozitlər üzrə məbləğ: " + toplam + " rubl";
// }

// // Örnek verilənlərlə funksiyamızı çağırırıq
// console.log(hesabCemi(1200, 20)); // Bütün depozitlər üzrə məbləğ: 2700 rubl

// CHECKCAR

// function checKcar(car) {
//     if(car !== 'mercedes') {
//         return 'olmaz'
//     }
//     return 'olar'
// }
// document.write(checKcar('mercedes'))

// ISEVEN TASK

// function isEven (a) {
//     if(a % 2 === 0) {
//         return 'true'
//     }
//     return 'false'
// }
// document.write(isEven(7))

// CALL BACK

// 1. en bawda olan parametrin yanina 2ed elave parametr qeyd edirik
// if else value yerine elave etdiyimiz parametrlerin arqumentini elave edirik

// const checkCar = (carname,/*1.*/ok, error) => {
//     if (carname !== 'mercedes') {
//         error() // 2. alert('bu masin standartlara uygun deyil')
//     } else {
//         ok() // 2. alert('sen artiq aramizdasan')
//     }
// }

// // QIRAQDA YAZILMASI

// // const a = () => alert('sen artiq aramizdasan')
// // const b = () => alert('standartlara uygun deyil')
// // checkCar('bmw',a,b)

// checkCar(
//     'bmw', // bu carname parametrine aiddi
//     () => alert('sen artiq aramizdasan'), // bu ok parametrine aiddi
//     () => alert('standartlara uygun deyil') // bu error parametrine aiddi

//     // BU KOHNE KODDU YUXARIDAKI ARROW ILE YAZILIB DAHA QISALDILMIW FORMASIDI
//     // function () {
//     //     alert('sen artiq aramizdasan'); // bu ok parametrine aiddi
//     // },
//     // function () {
//     //     alert('standartlara uygun deyil'); // bu error parametrine aiddi
//     // }
// ) 

// const checkCar = (carname, ok, error) => {
//     if(carname !== 'mercedes') {
//         error()
//     }else {
//         ok()
//     }
// }
// checkCar(
//     'bmw',
//     () => alert('sen artiq aramizdasan'),
//     () => alert('standartlara ugun deyil')
// )