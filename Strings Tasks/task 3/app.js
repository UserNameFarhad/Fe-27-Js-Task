// 3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

let nameAndSurname = prompt('adinizi ve soyadinizi daxil edin')

document.write(nameAndSurname.slice(-1, -6))
