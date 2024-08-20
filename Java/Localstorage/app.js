const modeBtn = document.getElementById('modeBtn');
const body = document.body

const modeChanger = () => {
    const mode = localStorage.getItem('mode') || "light"
    body.className = mode
}
modeChanger()

// localStorage.clear() // local storage i silir

modeBtn.addEventListener('click', (e) => {
    if (body.classList.contains("light")) {
    body.className = 'dark';
    localStorage.setItem("mode","dark")
    e.target.innerText = "🌞"
    } else {
        body.classList = 'light'
    localStorage.setItem("mode","light")
    e.target.innerText = "🌜"
    }
})