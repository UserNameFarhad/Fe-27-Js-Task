// Task-01
// İkirəqəmli ədədi üçrəqəmli olana qədər artırın.
// İstifadəçidən ikirəqəmli ədəd daxil etməsini xahiş edin.
// Bu rəqəmi üçrəqəmli olana kimi 7 - ədədi qədər artırın.
// Son dəyəri konsola çıxarın.

let number = +prompt('reqem');
if (number > 9 && number < 100) {
    while (number < 100) {
        number += 7
    } document.write(number)
} else {
    alert('ikireqemli daxil edin')
}