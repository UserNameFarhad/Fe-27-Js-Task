//3 rəqəmli ədəd qəbul edən və onun rəqəmlərinin cəmini qaytaran funksiya yazın.Məsələn daxil edilib 547,cavab olmalıdı 5+4+7 yəqni 16

const sum = (num) => {
    num = num.toString();
    let result = 0;
    for (let i = 0; i < num.length; i++) {
        result += +num[i];
    }
    return result
}

console.log(sum(56));

// 