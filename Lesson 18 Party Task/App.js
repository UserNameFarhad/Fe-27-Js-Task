let name = prompt('Adinizi daxil edin')
let gender = prompt('Genderiniz teyin edin')
let age = +prompt('Yasinizi daxil edin')

if (age >= 18 && gender == 'k' ) { document.write(`Salam Cenab ${name}`) }
if (age >= 18 && gender == 'q' ) { document.write(`Salam Xanim ${name}`) }
else {document.write('siz daxil ola bilmersiz!')}