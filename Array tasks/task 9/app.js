// 4.Rəqəmlər massivini parametr kimi qəbul edən və əgər həmin massivdə mənfi ədədlər varsa onları massiv şəklində geri qaytaran, yoxdursa uyğun mesajı geri funksiya yazın.

function menfieded(arr) {
    let eded = arr.filter(num => num < 0);
    
    if (eded.length > 0) {
        return eded;
    } else {
        return 'menfi eded yoxdur';
    }
}

let arr1 = [1, 2, -3, 4, -5];
let arr2 = [10, 20, 30, 40, 50];

console.log(menfieded(arr1)); 
console.log(menfieded(arr2));
