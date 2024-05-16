// 5.Funksiya yazın.Arqument olaraq aldığı sözün içərisində rəqəmləri seçsin və geri qaytarsın.
// Məsələn: "hell5o wor6ld" -> 56
// getNumberFromString(number)

function getNumberFromString(text) {
    return text[6]
}
let text1 = "hell5o wor6ld"

document.write(getNumberFromString(text1))