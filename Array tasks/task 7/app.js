// 2. İki array verilib. Bu iki array-dən yalnızca ilk array-də olub, ikinci array-də isə olmayan elementləri tapın.

let arr1 = ['Asiman','Isi','Kamal'];
let arr2 = ['Nicat','Isi','Fidan'];

let newArr = arr1.filter(elem => !arr2.includes(elem))
console.log(newArr);

