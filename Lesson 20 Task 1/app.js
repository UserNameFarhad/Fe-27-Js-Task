let count = 50;
let user = +prompt('Reqemi daxil edin');
let cehd = 1;

while (user !== count) {
   if (user < count) {
      user = +prompt('Reqemi daxil edin');
   } else {
      user = +prompt('Reqemi daxil edin');
   }
   cehd++
}

if (cehd == 1) {
   document.write(`${cehd} defeye tapdiz, 1000 azn qazandin`)
} else if (cehd <= 5) {
   document.write(`${cehd} defeye tapdiz, 750 azn qazandin`)
} else if (cehd >= 5 && 9 >= cehd) {
   document.write(`${cehd} defeye tapdiz, 250 azn qazandin`)
} else {
   document.write(`${cehd} defeye tapdiz, -250 azn hesabdan cixildi`)
}