// Task-06
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

// function isLucky (a,b,c,d,e,f) {
//    if (a + b + c === d + e + f) {
//     return true
//    } else {
//     return false
//    }
// }
// document.write (isLucky(5,1,4,3,6,1))


const isLucky = (number) => {
   number = number.toString(); // numberi stringe cevirmek ucun
   const ilkUcluk = number[0] + number[1] + number [2];
   const ikinciUcluk = number[3] + number[4] + number [5];
   return ilkUcluk === ikinciUcluk;
} 

console.log(isLucky(132132));
console.log(isLucky(123123));