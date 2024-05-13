// Task-10
// İstifadəçidən rəqəm qəbul edən və onun müsbət, mənfi və ya sıfır olduğunu yoxlayan bir funksiya yazın. (if-else ilə)

function number (n) {
    if (n > 0) {
        return 'bu musbet ededdir'
    } else if (n < 0) {
        return 'bu menfi ededdir'
    } else if (n === 0) {
        return 'bu eded sifirdi'
    }
}

document.write(number(0))