// DOM - Document Object Model

// console.dir(document) // documenti obyekt formasinda verecek

// console.log(document.body.childNodes);
// Javascriptde htmlde id-i olan elemente style vermek ucun getElementById("bura id-i yaziriq") metodundan istifade edirik.


// document.body.style.backgroundColor = 'purple'
// console.log(document.getElementById("box"));
// const box = document.getElementById("box")
// document.getElementById("box").style.background = "red"
// document.getElementById("box").style.padding = "10px"
// box.style.background = "purple";
// box.style.padding = "10px";
// console.log(box.textContent);

// id olan elementleri getElementById ile deyiwirdik
// Class olan elementleri ise getElementsById (elementS) metodu ile deyiwirik.

// const description = document.getElementsByClassName("desc");
// console.log(description);
// description[1].style.color = "red" 
// Bu formada classlara style vermek olar

// Querry selector
// const elem = document.querySelectorAll(".desc");
// console.log(elem);
// for (let x of elem) {
//     x.style.color = "green"}

// const arr = ['Arzu', 'Asiman', 'Nicat', 'Nazim'];
// const ol = document.querySelector('#students');
// arr.forEach((student) => {
//     console.log(student);
//     ol.innerHTML = `<li>${student}</li>`
// })

// const countBox = document.getElementById('count')
// const button = document.getElementById("button")
// // button.onclick = function() {
// //     alert("clicked");
// // }
// button.onclick = () => {
//     countBox.innerHTML++
// }

// const divs = document.getElementsByClassName('test');
// console.log(divs); // bu bize html collection list cixardacaq

// const divs = document.querySelectorAll('.test');
// console.log(divs); // bu bize nodelist formasinda cixardacaq
// // html collection ile ferqi odurki bunlari dovre salmaq olur.
// divs.forEach(e => {
//     console.log(e);
// }) // bu cur yazsaq gorerik ki listleri bir bir qaytarib

// hasattribute olub olmadigini yoxlayir
// getatribute olan atributu cixardir
// setatribut evez edir

// const div = document.getElementById('title');
// console.log(div);
// console.log(div.hasAttribute('title')); // bele halda true cixardacaq cunki title atributu var burda.
// console.log(div.getAttribute('class')); // test // bele halda class i cixardacaq konsola.
// div.setAttribute("id", "newId"); // kohne id-si title idi deyiwdik oldu newID

// // clickleyende nese etmek ucun onclick funksiyasindan istifade etmek lazidmir

// const div = document.getElementById('title');
// const chngClsBtn = document.getElementById("chngClsBtn");
// // bu buttona klikleyende classi deyiwsin ve yaxud bezi deyiwiklikler edek klassda
// chngClsBtn.onclick = () => {
//     // div.classList = 'mavi' // divin klasslistini deyiwirik
//     // div.classList.add ('salam') // mavi klassinin yanina salam klassi elave etdi.
//     div.classList.remove('qirmizi') // qirmizini remove et
//     div.classList.add('mavi') // mavi elave et
//     // qirmizini silib mavi elave etdik
//    console.log(div.classList); // divin classlistlerini ekrana yazdirir
// }
const darkModeButton = document.getElementById('darkModeButton')
const lightModeButton = document.getElementById('lightModeButton')

darkModeButton.onclick = () => {
    document.body.classList.remove('light')
    document.body.classList.add('dark')
} // darkmode click edende light sil dark elave et

lightModeButton.onclick = () => {
    document.body.classList.remove('dark')
    document.body.classList.add('light')
}
// bunu calisaq bir duyme ile yaratmaga

// const modeButton = document.getElementById('modeButton')

// modeButton.onclick = () => {
//     if (document.body.classList.contains('dark')) {
//         document.body.classList.remove('dark')
//         document.body.classList.add('light')
//         modeButton.innerText = 'Dark Mode 🌚'
//     } else {
//         document.body.classList.remove('light')
//         document.body.classList.add('dark')
//         modeButton.innerText = 'Light Mode 😎'
//     }
//     // document.body.classList.remove('dark')
//     // document.body.classList.add('light')
// }

// Element yaratmaq ve silmek

// const newTodoInp = document.getElementById('newTodoInp')
// const addToDoBtn = document.getElementById('addToDoBtn')
// const list = document.getElementById("list")

// addToDoBtn.onclick = () => {
//     console.log(newTodoInp.value);
//     newTodoInp.value = ''; // burda yaziniz yazib add etdikden sonra doldurma xanasi bow qalmasi ucun yazilir
//     newTodoInp.focus() // add etdikden sonra yene doldurma xanasina focuslanmasi ucun
// }

// Helem indi element yaratmaga gelirik

// addToDoBtn.onclick = () => {
//     const todo = newTodoInp.value
//     newTodoInp.value = ''; // burda yaziniz yazib add etdikden sonra doldurma xanasi bow qalmasi ucun yazilir
//     newTodoInp.focus() // add etdikden sonra yene doldurma xanasina focuslanmasi ucun
//     // list.innerHTML += `<li>${todo}<li>`

//     const li = document.createElement('li')// created element html e element elave edir
//     li.innerText = todo;
//     // list.prepend(li)
//     list.insertBefore(li,list.children[1]) // sozlerin arasina elave edir
// }

/* 
appendChild() listin axirina yalniz bir element elave edir
append() listin axirina birnece element elave etmek olur
prepend() listin evveline elave edir

*/
// zibil qabina klikledikde silsin
// addToDoBtn.onclick = () => {
//     const todo = newTodoInp.value;
//     const li = document.createElement('li');
//     const button = document.createElement('button');

//     newTodoInp.value = "";
//     newTodoInp.focus();

//     li.classList.add("list-item") // yaratdigimiz classi style ile birlikde elave etmek
//     li.classList.add("delete-button")
//     button.innerText = '🗑️';
//     li.innerText = todo; // li-in icerisine texti atdiq
//     li.appendChild(button); // li-in icerisine duymeni atdiq
//     list.prepend(li); // li-in ozunu ul e birlesdirmek ucun
// }

// const delTodo = () => {
//     alert("ok")
// }
// delAllTds.onclick = () => {
//    list.innerHTML = ""
// }