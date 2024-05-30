document.getElementById('menu').addEventListener('click', function(){
    let items = this.getElementsByTagName('li');
    for (let i = 1; i < items.length; i++) {
        if (items[i].style.display === 'none') {
            items[i].style.display = 'list-item';
        } else {
            items[i].style.display = 'none'
        }
    }
})






// document.getElementById("menu")
// document.addEventListener("click", function() {
//     let items = this.getElementsByTagName("li");
//     for (let i = 1; i < items.length; i++) {
//         if (items[i].style.display === "none") {
//             items[i].style.display = "list-item";
//         } else {
//             items[i].style.display = "none";
//         }
//     }
// });

// console.log();