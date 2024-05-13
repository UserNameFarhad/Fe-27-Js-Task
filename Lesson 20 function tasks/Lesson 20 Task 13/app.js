// Task-13
// İstifadəçidən iki ədəd daxil etməsini tələb edən və onların ən böyük ortaq bölünənini tapıb göstərən bir proqram yazın. (dövrlə və if-else ilə)

// function ortaqbolunen (num1, num2) {
//     let number = 1;

//     for (let i = 1; i <= num1 && i <= num2; i++) {
//         if (num1 % i === 0 && num2 % i ===0) {
//             number = i;
//         }
//     }

//     return number;
// }

// let num1 = prompt('birinci ededi daxil edin');
// let num2 = prompt('ikinci ededi daxil edin');

// let cem = ortaqbolunen(num1, num2) ;

// document.write('en boyuk ortaq bolunen ' + cem)

const ebob = (a, b) => {
    const boyukEded = a > b ? a : b;
    for (let i = boyukEded; i > 0; i--) {
        if (!(a % i) && !(b % i)) {
            return 'ebob: ' + i
        }
    }
} 

console.log(ebob(20,15));