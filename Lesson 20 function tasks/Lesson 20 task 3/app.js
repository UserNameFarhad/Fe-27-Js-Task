// Bütün hesabların cəmini rubl ilə mesaj çıxaran funksiya tərtib edin.
// Rubl və dollarla hesab qəbul edən və bütün hesablardakı məbləğin
// cəmin rublla göstərən funksiya yazın.
// Tutaq ki, müştərinin rubl hesabında 1200 rubl, dollar hesabında isə 20 dollar var.
// Bir dollar üçün məzənnə 75 rubl təşkil edir.
// Bu halda, funksiya belə mesaj göstərməlidir: Bütün depozitlər üzrə məbləğ: 2700 rubl.

function sum (rubl, dollar) {

    let rubltodollar = dollar * 75; // dollari rubla ceviririk

    let cem = rubl + rubltodollar ;

    return cem + ' rubl'
}

console.log(sum (1200 , 20))



// rubl to dollar = dollar * 75 // 20*75=1500
// cem = rubl + rubltodollar(20*75=1500) // eger rubl 1200 // 1200 + 1500 = 2700
// return cem i cixar