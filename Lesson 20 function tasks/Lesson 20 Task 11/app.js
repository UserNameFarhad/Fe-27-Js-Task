// Task-11
// İstifadəçidən bir ədəd daxil etməsini tələb edən və rəqəmin mükəmməl və ya mükəmməl olmadığını bildirən bir proqram yazın. (if-else ilə)

// function num () {
// let pro = prompt('eded daxil edin');
//    if (pro % 2 === 0) {
//     console.log('mürəkkəb ədəddir');
//    } else if (pro % 3 === 0 ) {
//     console.log('murekkeb ededdir');
//    } else if (pro % 5 === 0) {
//     console.log('murekkeb ededdir')
//    } else if (pro % 7 === 0) {
//     console.log('murekkeb ededdir ')
//    } else {
//     console.log('sade');
//    }
// }
// num();


const isPerfect = (num) => {
   let bolenlerinCemi = 0
   for (let i = 1; i < num; i++) {
      if (!(num % i)) bolenlerinCemi = bolenlerinCemi + i
   }

   return bolenlerinCemi === num
}

console.log(isPerfect(28));
// 28
// 14
// 7
// 4
// 2
// 1