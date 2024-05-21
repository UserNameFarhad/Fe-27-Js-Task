// <!-- 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number) -->

const getNumberFromString = (str) => {
    let numbers = "" ; // reqemi qaytarmaq ucun deyiwen yaradiriq reqemleri icinde saxlamaq ucun.
    // aldigimiz sozu dovre salmaliyiq icindeki istediyimiz yazini goturmek ucun.
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i]); // herfleri gormek ucun str[i] yaziriq
        if (!isNaN(+str[i]) && str[i] !== " ") { //
            numbers += str[i]
        }
    }
    console.log(numbers);
}

getNumberFromString ("hell5o wor6ld")