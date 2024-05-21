// 7. Adlar massivi verilib. Bir funksiya yazın, hansı ki parametr olaraq massiv qəbul edir. Həmin massivdə "A" hərfi ilə başlayan elementlərdən ibarət yeni massiv yaradıb, elə bir dəyər tapılmasa uyğun mesajı geri qaytarmalıdır.
// let str = [
//   "Alice",
//   "Bob",
//   "Catherine",
//   "David",
//   "Eva",
//   "Andrew",
//   "Frank",
//   "Anna",
//   "George",
//   "Alex",
// ];

function names(str) {
    let newStr = str.filter(name => name.startsWith('A'));
    if (newStr.length === 0) {
        return ('A herfinde baslayan ad yoxdur');
    } return (newStr)
}
let str = [
    "Alice",
    "Bob",
    "Catherine",
    "David",
    "Eva",
    "Andrew",
    "Frank",
    "Anna",
    "George",
    "Alex",
]

console.log(names(str));
