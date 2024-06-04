// Bir add funksiyasi yazin. 3 arqument alsin. ilk 2si ededler (eded1 ve eded2) 3cusu ise, funksiya olsun. (callback). men o funksiyaya console.log ve ya alert verib, ozum teyin edim, neticeni alert-de gostersin, yoxsa console-da.

// add(3,5,console.log) //  console-a 8 yazmalidi
// add(3,5,alert) //  alert-e 8 yazmalidi

// function add (eded1, eded2, funksiya) {
//     const result = eded1 + eded2;
//     funksiya(result);
// }

// add(3,5,console.log)
// add(3,5,alert)

// #task
// Bir parametrli funksiya yazın, parametr olaraq cins(K,Q) və ad qəbul etsin. 
// Həmin funksiya geriyə funksiya göndərsin. 
// Geriyə göndərdiyi funksiyada əgər cins qadındırsa qarşısına Xanım, kişidirsə cənab yazılıb, console-a çıxarılsın

// function cins(gender, name) {
//     return function () {
//         if (gender === 'K') {
//             console.log('Cenab ' + name);
//         } else if (gender === 'Q') {
//             console.log('Xanim ' + name);
//         } else {
//             console.log('Namelum Gender');
//         }
//     }
// }

// let kisi = cins('K', "Kamal");
// let qadin = cins('Q', 'Fidan');

// kisi();
// qadin();


// Sayıların Toplamı: 1-dən 10-a qədər olan ədədlərin cəmini hesablayan bir funksiya yazın.

// function cem () {
//    let sum = 0;
//    for (let i = 1; i <= 10; i++) {
//     sum += i
//    }
//    return sum
// }

// console.log(cem());

// Ədəd Tək və ya Cüt: Verilən bir ədədin tək və ya cüt olduğunu yoxlayan funksiya yazın.

// function eded (reqem) {
//     if (reqem % 2 === 0) {
//         return "Cut"
//     } else {
//         return "Tek"
//     }
// }

// console.log(eded(10));
// console.log(eded(11));

// String Uzunluğu: Verilən string-in uzunluğunu qaytaran funksiya yazın.

// function string (text) {
//   return text.length
// }

// console.log(string('salam'));

// Ədədin Kvadratı: Verilən ədədin kvadratını hesablayan funksiya yazın.

// function kvadrat (reqem) {
//    return reqem**2
// }
// console.log(kvadrat(5));

// Əksinə Çevirmək: Verilən string-i əksinə çevirən funksiya yazın.


const reverseWords = str => str.split(' ').map(word => [...word].reverse().join('')).join(' ');
console.log(reverseWords('salam'));