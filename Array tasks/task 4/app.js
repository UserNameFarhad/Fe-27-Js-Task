// 4.İstifadəçidən vergüllə ayrılmış beş ədədi daxil etməyi xahiş edin və onları massivdə saxlayın. İstifadəçidən beş ədəd elementi daxil etməyi tələb edən, onları massivə yazan və ən kiçik ədədi konsola çıxaran proqram yazın.

// number1 = [prompt('birinci ededi daxil edin')]
// number2 = [prompt('ikinci ededi daxil edin')]
// number3 = [prompt('ucuncu ededi daxil edin')]
// number4 = [prompt('dorduncu ededi daxil edin')]
// number5 = [prompt('besinci ededi daxil edin')]

// console.log(Math.min(number1,number2,number3,number4,number5));

const num = prompt('Reqemleri daxil edin');
const getMinNum = (n) => n.split(",").sort((a,b) => a - b)[0]
console.log(getMinNum(num));