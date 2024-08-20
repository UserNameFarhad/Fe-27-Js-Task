// let i = 1; // reqemleri adeten i deyiweni ile yaradirlar 
// while (i <= 100) { // while dovr demekdir, ~ i 100 e beraber olana kimi dovr et.
//     console.log(i);
//     i++; // i ni 1 vahid artiririq ki 1 den 100 e qalxsin
// } // i <= 100 serti odenene qeder while da qalacaq, i 101 olanda whild an qiraga cixacaq

// 1 den 20 e kimi olan ededlerin cemini cixardaq

// let i = 1;
// let cem = 0; // cemi cixardmaq ucun elave cem deyiweni yaradiriq
// while (i <= 20) {
//     cem = i; // bu i her defe dovr etdike cem hemen o i reqemi necedirse o reqem olur, 1ci dovrde i 1di - cem oldu 1, duwdu asagi 2ci dovrde i 2di cem oldu 2.
//     i++;    
// }

// let i = 1;
// let cem = 0; // cemi cixardmaq ucun elave cem deyiweni yaradiriq
// while (i <= 20) {
//     cem = cem + i;
//     // 1 2 3 4 5 6 7 8
//     // cem indi 0 di
//     // cem = cem + 1 // 0 + 1 (i ci dovrde 1 di)
//     // i dovr edir, i oldu 2, cem ise indi olub 1
//     // cem = cem + 2 // 1 + 2 = 3
//     i++;    
// }

// 1 den 100 e qeder olan reqemlerin hasili
let i = 1;
let hasil = 1;

while (i <= 5) {
    hasil *= i; // hasil = hasil * i qisa yazilisidi
    i++; // i artmasi ucun yazilir
}
console.log(hasil);

// reqem tapma oyunu

// const constNumber = 55;
// let number = +prompt('reqemi daxil et');
// let cehd = 1;

// while (constNumber !== number) {
//     if (number < constNumber) {
//         alert('yuxari qalx')
//     } else if (number > constNumber) {
//         alert('asagi dus')
//     }
//     cehd++;
//     number = +prompt('reqemi daxil et');
// }

// document.write(`ehsen bu reqem ${number} idi ${cehd} cehde tapdin`)

// for ile yazilis qaydasi

// for(let i = 1; i <= 100; i++) { // i = 1 - deyiweni yaratdiq, i <= 100 - 1 den 100 e kimi, i++
//    console.log(i)
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }

// for (let i = 5; i <= 20; i++) {
//     if (i == 10) continue // 10 reqemi cekir
//     console.log (i);
// }

// for (let i = 5; i <= 20; i++) {
//     if (i == 10) break // 9 a kimi dövr edir sonra dayanır
//     console.log (i);
// }

// const word = "salam"; // stringi nece dovre salmaq olar ?
// // salam
// // 01234 - indeksler 0 dan baslayir
// console.log(word[word.length - 1]); // [] - indeki gosterir, burda m herfi cixacaq konsola

// const a = 5;

// for (let i = 1; i <= a; i++) {
//     let b = "" ;
    
// for (let c = 1; c <= a - i; c++) {
//     b += " ";
// }

// for (z = 1; z <= 2*i-1; z++) {
//     b += "*"
// }

// console.log(b);
// }



// a = 5
// b = ""
// i = 1
// c = 1