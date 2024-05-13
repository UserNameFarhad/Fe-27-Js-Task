// 4. Sprear və rest operatorları arasındakı fərqi izah edin.Hər ikisinin istifadəsinə aid nümunələr yaın

let user1 = {
    name: "Ramin",
    surname: "Mammadzade",
    age: 36
}

// Sprear operatoru vasitesile user1 objectin icerisindeki melumatlari yeni object yaradaraq onun icine oturmek olar. Mes:

let user2 = {...user1} // bu qaydada user1 de olan melumatlar yeni user2 yaradilaraq ora gonderildi
user2.name = "Kamal" // Bu qaydada tekce user2 de olan objectin adini deyiwmek olar

console.log(user1);
console.log(user2);

// Rest operatoru

function numbers (a,b) {
    console.log(a); // consola 1 çıxardacaq
    console.log(b); // consola 2 çıxardacaq
}
numbers(1,2,3,4,5,6,7,8,9)

// Qalan reqemleri consola cixardmaq isteyirikse function numbers (a,b, ...digernomreler) yazmaq lazimdir, daha sonra consol.log(digernomreler) yazdiqda qalan nomreler gorsenecek. Mes:

function nomreler (a,b, ...digernomreler) {
    console.log(a);
    console.log(b);
    console.log(...digernomreler);
}
nomreler(10,11,12,13,14,15)