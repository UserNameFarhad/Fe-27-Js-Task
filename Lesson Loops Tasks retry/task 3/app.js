// 3.İstifadəçidən tam adı «AD SOYAD» formatında daxil etməyi xahiş edin. Tam adını konsola fərqli qaydada yəni «SOYAD AD» formatında çıxarın,

let str = prompt('Adinizi daxil edin')
let ters = '';
for (let i = str.length - 1; i <= 0; i--) {
    ters += str[i]
}
document.write(ters);