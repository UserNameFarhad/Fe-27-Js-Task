/* 

1. filter() metodu yeni massiv yaratmaq üçün işlədilir, köhnə massivdəki elementləri öz içərisində saxlayır, köhnə massivdən yeni massivə gələn elementlərdə dəyişiklik etmək olur. Bu halda höhnə massiv dəyişmədən qalır, təkcə yeni massiv dəyişir. Filter metodu bizdən callback function alır, hansıki içərisində element, index və array ala bilir. Array məcburi deyl. 
Məs:
const number = [1,2,3,4,5,6];
function cutreqem(number) {
    return number % 2 === 0;
}
const cutreqemler = numbers.filter(cutreqem)
console.log(cutreqemler);

2. map () metodu kohne arrayde deyişiklik etmək üçün işlədilir. Map forEach den ferqli olaraq geriye bir array qaytarir. Map metodu ilə yeni array yaradıb onda dəyişiklik edib geri dönüş edə bilərik, köhnə arrayda dəyişmədən qalır. forEach metodu elementi deyismək üçün deyil. 

forEach () bu metod bize geriye array qaytarmır, forEach sadece dövr edir və userləri yazdırmaq üçündür. return etməyə çalışanda undefined verir. forEach for-un daha müasir formasıdır. forEach obyekt üçün deyil. forEach vasitəsilə dövr etdikdə bizdən element və index alır.

Map ve forEach ferqleri
forEach geri dönüş etmir. Geri dönüş edəmndə undefined verir
Map yeni yaratdığımız arraydəki dəyişikləri geri dönüş etmək imkanı verir.

*/

/* 
3. constructor funksiya vasitəsi ilə user obyekti yaradın, içərisində 
ad və soyad xüsusiyyətləri olsun.
function user(ad, soyad) {
    this.ad = ad;
    this. soyad = soyad;
}

const user1 = new user ('Farhad' , 'Aliyev');
console.log(user1.ad , user1.soyad);
*/

// 4. heap və stack haqqında məlumat yazın

// Heap ve Stack

// Heap ve Stack iki əsas yaddaş tipidi hansıki proqramlaşdırma dilindı işlədirlir.

// Hape ve Stack - in əsas fərqləri onların yaddaşlarının idarə olunmasıdı. Stack avtomatik idarə olunur, heap isə yaddaş tipi dinamikdir və icra olunduğu müddət dəyişə bilər.

// Stack - o yaddaş tipidir ki hansıki içində dəyişənlər və funksiya çağırışları saxlanılır. Funksiya çağırılanda onun içindı olan dəyişənləri və parametrləri stack-ə yönəldilir, funksiya bitdikdən sonra bu yaddaşlar stackden silinir. Stack yaddaş tipinin razmeri var hansıki RAM-dan asılıdır.

// Heap - o yaddaş tipidirki hansıki içində obyektler saxlanılır proqram icra olunduğu vaxtda. Stackden ferqli olaraq heap-in yaddaş tipi dinamikdir hansıki proqram icra olunduğu vaxt dəyişə bilər. Obyektler heapde yaddaşda qalır onların keçid yolu olana kimi, və ya silinməyənə kimi.

// 5. immutable və mutable type-lar hansılardır və nəyə görə belədir?
/* obyektler, datalar hasnılarki yaradıldıqdan sonra dəyişmək mümkündür onlar mutable adlandırılır. Javascriptdə array-lar və objectlər mutable sayılır Məs:
let person = { name: 'Alice', age: 30 };
person.age = 31;

İmmutable
obyektlər, datalar yaradıldıqdan sonra dəyişmək mümkün deyilsə immutable adlanır, dəyişilməyən elementlərdə  dəyişiklik yaratdıqda onlar yeni elementə çevrilir, köhnə element isə dəyişmədən qalır.
immutable aiddir:
string
number
boolean
null
undefined
*/

// 6. primitiv type-lar hansılardır?
/* pritiv tipler datalar onlardıki hansıki obyekt sayılmırlar və metodları yoxdur, onları dəyişmək olmur
string
number
boolean
null
undefined
*/
// spread haqqinda yazin ve kod numunesi gosterin
/* Spread operatoru 
Spread operatoru vasitesile yeni array yaradib kohne arraydaki datalari yeni arraya kocurmek olur.

const arr = [1,2,3];
const arr1 = [...arr];
console.log (arr1) // 1,2,3
*/

// 8. push və shift metodları nə iş görür?
// push arrayin axırına element əlavə edir, indexləri dəyişmir
// Shift  massivin əvvəlindən elementin birini silir.
// pop arrayin axirindan element silir
// unshift arrayin əvvəlinə elenet əlavə edir

/* 10.splice metodu haqqında məlumat yazın.
splice metodu vasitəsilə arraydan elementləri silmək, dəyişmək və ya əlavə etmək olur.
let fruits = ['apple', 'banana', 'mango', 'orange'];
let removed = fruits.splice(1, 2); // 1dən basla 2ni sil // 
console.log(removed); // banana, mango
*/

// reverse() metodu hansı type-a aiddir və nə iş görür?
/* reverse metodu array tipinə aiddir, massivləri tərs yazmaq imkanı yaradır, digər metodlar ilə birlikdə işlətmək mümkündür Məs:
let numbers = [3, 1, 4, 1, 5, 9];
numbers.sort().reverse();
console.log(numbers); // [9, 5, 4, 3, 1, 1]
*/

// 12.prompt() metodunda cancel düyməsini sıxsaq geriyə nə qayıdar?
// null 

// 13.stringin hansı metodlarını tanıyırsınız?
/* 
charAt - elementin indeksini təyin edib neçənci indexdə hansi hərf və ya rəqəm varsa onu çxardır
charCodeAt - elementin ascii cedvelinde necenci sırada olduğunu göstərir. console.log(str.charCodeAt(1)); // 101
concat - elementəri birləşdirir
includes - elementin içərisində müxtəlif sözün olub olmadığını yoxlayır.
indexOf - neçənci hərif neçənci indeksdə olduğunu göstərir
slice - sözün seçdiyimiz hissəsini çıxardır.
split - stringi massivə döndərir
toLowerCase - böyük olan sözləri kiçik edir
*/
// 14.+ operatoru hansı işləri görür?
/*
ədədlərin cəmini toplayır
stringləri birləşdirir
elementləri birləşdirir
stringi numberə çevirir
*/
// 15.and operatoru barədə məlumat yazın.


// 1. .filter() metodu haqqında ətraflı məlumat yazın.
// 2. .map() və .forEach() metodları arasında kı, fərqlər nələrdir?
// 3. constructor funksiya vasitəsi ilə user obyekti yaradın, içərisində 
// ad və soyad xüsusiyyətləri olsun.
// 4. heap və stack haqqında məlumat yazın
// 5. immutable və mutable type-lar hansılardır və nəyə görə belədir?
// 6. primitiv type-lar hansılardır?
// 7. spread haqqinda yazin ve kod numunesi gosterin
// 8. push və shift metodları nə iş görür?
// 9. pop və unshift metodları nə iş görür?
// 10.splice metodu haqqında məlumat yazın.
// 11.reverse() metodu hansı type-a aiddir və nə iş görür?
// 12.prompt() metodunda cancel düyməsini sıxsaq geriyə nə qayıdar?
// 13.stringin hansı metodlarını tanıyırsınız?
// 14.+ operatoru hansı işləri görür?
// 15.and operatoru barədə məlumat yazın.
// 16.or operatoru barədə məlumat yazın
// 17.console.log(true && false) ifadəsinin cavabı nə olacaq?
// 18.O hansı string metodur ki, aldığı arqumentə uyğun olaraq stringi massivə çevirir?
// 19.Bir obyektimiz var,onun dəyərlərini necə başqa bir obyektə kopyalaya bilərik? (referansı kopyalanmasın)
// 20.find() və indexOf() metodları haqqında məlumat yazın.
// 21.use strict haqqında məlumat yazın
// 22.callback function nədir və necə yazılır?
// 23.function declarationa,expressiona və arrova aid nümunə yazın.
// 24.Sonsuz dövrü necə yarada bilərik?
// 25. for in və for of haqqında yazın.
// 26.ternary operatoru haqqında yazın.
// 27.typeof operatoru haqqında yazın.
// 28.rest haqqinda yazin ve kod numunesi gosterin
// 29.stringi numbere nece usulla cevure bilerik? kod numunleri yazin
// 30.concat() nə işə yarayır?
// 31.replace() nə işə yarayır?
// 32.join() nə işə yarayır?
// 33.numberi stringe nece cevire bilerik? kod numuneleri yazin
// 34.let və const arasındakı fərq nədir?
// 35.dəyişən adı hansı simvollarla başlaya bilməz?
// 36. ** operatoru nə işə yarayır?
// 37. this açar sözü haqqında yazın.
// 38. return açar sözü barədə yazın.

