// 5. Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper() funksiyasını yazın.

function kebabToUpper (str) {
  strToMassiv = str.split('-');
  strToUpperCase = strToMassiv.map(newStr => newStr.toUpperCase());
  altXettStr = strToUpperCase.join('_');
  return altXettStr
}
console.log(kebabToUpper('kebab-case'));


