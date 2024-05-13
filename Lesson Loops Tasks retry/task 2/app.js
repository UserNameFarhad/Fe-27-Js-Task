// Task-02
// Konsola N dəfə «I know how to use cycles» mesajı çıxaran proqram yazın.
// Proqram N ədədini istifadəçidən soruşur.

let i = +prompt('enter number');
const text = 'i know how to use cycles';
let a = 0;
while (a < i) {
    document.write(text);
    a++
}