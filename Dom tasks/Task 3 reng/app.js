let button1 = document.querySelector(`.red`)
let button2 = document.querySelector(`.green`)
let button3 = document.querySelector(`.blue`)

const bgColorChanger = (color) => {
    document.body.style.backgroundColor = color
}

button1.onclick = () => bgColorChanger('red')
button2.onclick = () => bgColorChanger('green')
button3.onclick = () => bgColorChanger('blue')
