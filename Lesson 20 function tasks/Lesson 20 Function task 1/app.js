// İstifadəçi adını parametr kimi qəbul edən funksiya yazın.
// İstifadəçi adını parametr kimi qəbul edən və konsola
// «[İstifadəçi adı] is active now» mesajı çıxaran funksiya tərtib edin.
// Funksiyanı 3 müxtəlif ad üçün çağırın.

function userName (username) {
    return `${username} is active now`
}
console.log(userName('Sabina'));
document.write(userName('Sabina'));
alert(userName('Sabina'));