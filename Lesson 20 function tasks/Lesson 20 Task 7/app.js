// Task-07
// Bir ədədi parametr kimi qəbul edən və cüt olduqda true,
// tək olduqda isə false qaytaran isEven () funksiyasını yazın.

function isEven (a) {
   if (a % 2 === 0) {
       return true
   } else {
    return false
   }
} 

document.write (isEven(21))