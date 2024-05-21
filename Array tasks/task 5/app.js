// 5. Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin. '32, 31, 34, 36, 31' mətni verilmişdir ,İçindəki vergülləri nöqtəli vergüllə əvəz edin.(Massivden istifadə ederek

// let number = ['32', '31', '34', '36', '31'];
// let result = number.join(';');
// console.log(result);

let str = '32, 31, 34, 36, 31';
console.log(str.split(",").join(';'));