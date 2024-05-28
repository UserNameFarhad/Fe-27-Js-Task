const dmode = document.getElementById('dmode');
const lmode = document.getElementById('lmode');

dmode.onclick = () => {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
}
lmode.onclick = () => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
}