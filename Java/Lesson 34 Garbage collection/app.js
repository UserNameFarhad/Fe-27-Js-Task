// let human = {
//    ad: 'Ali',
//    age: 22
// }

// let h = human;

// human = null;

// console.log(h);
// console.log(human);



// try {
//     console.log('Kamal');
// } catch (err) { 
//     console.log(err);
// }

// console.log('Heyat Davam edir');

// try {
//     const a = +prompt('enter the first number')
//     const b = +prompt('enter the second number')
//     if (b === 0) {
//         throw new Error("Cannot divide by zero")
//     }
//     console.log(a / b)
// } catch (err) {
//     console.log(err.message)
// }

let balance = 120;
try {
    const azn = prompt('how much')
    /*Number(azn) = NaN - Number(azn) ozu NaN - a beraber , NaN = NaN false verir bu cur yaza bilmerik*/
    if (isNaN(azn)) {
        throw new Error("xarab eledin!")
    }
    if (azn > balance) {
        throw new Error('Balansda kifayet qeder vesait yoxdur')
    }
    balance = balance - azn
    console.log(azn + ' manat');
} catch (error) {
   console.log(error.message);
} finally {
    console.log('Kart cixir');
}