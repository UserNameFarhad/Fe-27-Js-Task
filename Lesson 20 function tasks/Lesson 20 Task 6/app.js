// Task-06
// Biletin şanslı olub olmadığını yoxlayan funksiya yazın.
// Altı rəqəmli ədəd qəbul edən və ilk üç rəqəminin cəminin ikinci üç rəqəminin cəminə bərabər
// olduğunu yoxlayan isLucky funksiyasını yazın.
// Bilet uğurlu olarsa, funksiya true, uğursuz olarsa, false qaytarmalıdır.
// Məsələn, isLucky(234801);  // true qaytaracaq

function isLucky (a,b,c,d,e,f) {
   if (a + b + c === d + e + f) {
    return true
   } else {
    return false
   }
}
document.write (isLucky(5,1,4,3,6,1))