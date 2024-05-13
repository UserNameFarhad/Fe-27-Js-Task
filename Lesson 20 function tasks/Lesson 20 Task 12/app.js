// Task-12
// İstifadəçidən bir ay adı daxil etməsini tələb edən və həmin ayın neçə gün çəkdiyini göstərən bir proqram yazın. (switch-case ilə)

let month = prompt('ay daxil edin')

switch (month) {
    case 'Yanvar':
        document.write('Bu ay 31 gun cekir')
        break
    case 'Fevral':
        document.write('Bu ay 29 gun cekir')
        break
    case 'Mart':
        document.write('Bu ay 31 gun cekir')
        break
    case 'Aprel':
        document.write('Bu ay 30 gun cekir')
        break
    case 'May':
        document.write('Bu ay 31 gun cekir')
        break
    case 'Iyun':
        document.write('Bu ay 30 gun cekir')
        break
    case 'Iyul':
        document.write('Bu ay 30 gun cekir')
        break
    case 'Avqust':
        document.write('Bu ay 31 gun cekir')
        break
    case 'Sentyabr':
        document.write('Bu ay 30 gun cekir')
        break
    case 'Oktyabr':
        document.write('Bu ay 31 gun cekir')
        break
    case 'Noyabr':
        document.write('Bu ay 30 gun cekir')
        break
    case 'Decabr':
        document.write('Bu ay 31 gun cekir')
        break
    default: document.write('Bele ay yoxdur')
}