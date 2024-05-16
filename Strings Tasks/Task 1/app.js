// 1.İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin. Bu rəqəmi üçrəqəmli olana qədər, 7 artırın. Son dəyəri konsola çıxarın.

let number = +prompt("ikireqemli eded daxil edin");

if (number > 9 && number <100) {
    while(number < 100) {
        number += 7
    } document.write(number)
} else {
    alert('ikireqemli daxil et')
}