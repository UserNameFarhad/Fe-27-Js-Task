// 6. Orijinal massivin elementlərindən ibarət yeni massiv yaradın.
// Rəqəmlər massivi verilmişdir. Aşağıdakı qaydalarla dəyişdirilən orijinal massivin elementlərindən ibarət yeni massiv yaradın:

// mənfi ədədlər müsbət olublar;
// müsbət ədədlər ikiqat artırılıb.
// Input:  [1, 5, -7, 3, -9, 4, -6, 2];
// Output: [2, 10, 7, 6, 9, 8, 6, 4]

let numbers = [1, 5, -7, 3, -9, 4, -6, 2];
let plusnumbers = numbers.map(Math.abs);
console.log(plusnumbers);

let numbers1 = [2, 10, 7, 6, 9, 8, 6, 4];
let numbers2x = numbers1.map(num => num * 2);
console.log(numbers2x);

