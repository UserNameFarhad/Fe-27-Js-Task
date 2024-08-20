// buttona klikledikden sonra 3 saniyeden sonra ise duwsun
// settimeout
// settimeout ozu bir funksiyadir, callback function alir ve vergul ve vaxt (saniye) alir
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         console.log("💸💸💸");
//     }, 3000);
// }) 

// setinterval
// setinterval n saniyeden bir tekrarlasin 
// const btn = document.getElementById('btn');
// btn.addEventListener('click', () => {
//     setInterval(() => {
//         console.log("💸💸💸");
//     }, 3000);
// }) 

// 1 saniyeden bir h1 de reqemi deyiwdirmek
// const incrementBtn = document.getElementById('btn')
// const h1 = document.getElementById('h1')
// let count = 0;
// h1.innerText = count

// incrementBtn.addEventListener('click', () => {
//     setInterval(() => {
//         h1.innerText = ++count;
//     }, 1000);
// })

// stop ve reset artirmaq 
// const incrementBtn = document.getElementById('btn')
// const stop = document.getElementById('stop')
// const reset = document.getElementById('reset')
// const h1 = document.getElementById('h1')
// let count = 0;
// h1.innerText = count
// let interval = '';

// incrementBtn.addEventListener('click', () => {
//     interval = setInterval(() => {
//         h1.innerText = ++count;
//     }, 1000);
// })

// stop.addEventListener('click', () => {
//     clearInterval(interval)
// })

// reset.addEventListener('click', () => {
//     count = 0;
//     h1.innerText = count;
//     clearInterval(interval);
// })

const slider = document.getElementById('slider')
const slides = [
    "./Images/slide1.jpg",
    "./Images/slide2.jpg",
    "./Images/slide3.jpg",
]
let index = 0;
slider.style.backgroundImage = `url(${slides[index]})`;
const sliderFunc = () => {
    if (index < slides.length - 1) {
        index++
    } else {
        index = 0
    }
    slider.style.backgroundImage = `url(${slides[index]})`;
}
let mySlider = setInterval(sliderFunc, 1000);

slider.addEventListener("mouseenter", () => {
    clearInterval(mySlider)
})
slider.addEventListener("mouseleave", () => {
    mySlider = setInterval(sliderFunc, 1000)
})