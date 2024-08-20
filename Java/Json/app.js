/* JSON (JavaScript Object Notation) — это формат для хранения и обмена данными, который часто используется в веб-разработке. В JavaScript JSON можно использовать для сериализации объектов и массивов, а также для передачи данных между клиентом и сервером. Ниже приведены основные примеры работы с JSON в JavaScript на русском языке.

Основные операции с JSON в JavaScript
Создание JSON-объекта */

// let человек = {
//     имя: "Иван",
//     возраст: 30,
//     женат: true,
//     дети: ["Маша", "Дима"],
//     адрес: {
//         город: "Москва",
//         улица: "Ленина"
//     }
// };

/* Сериализация объекта в JSON-строку
Для сериализации объекта в JSON-строку используется метод JSON.stringify. */

// let jsonString = JSON.stringify(человек);
// console.log(jsonString);
// Вывод: {"имя":"Иван","возраст":30,"женат":true,"дети":["Маша","Дима"],"адрес":{"город":"Москва","улица":"Ленина"}}

/* Десериализация JSON-строки в объект
Для десериализации JSON-строки в объект используется метод JSON.parse.*/

// let jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);
// Вывод: { имя: 'Иван', возраст: 30, женат: true, дети: [ 'Маша', 'Дима' ], адрес: { город: 'Москва', улица: 'Ленина' } }

// const url = "https://jsonplaceholder.typicode.com/users";
// const xhr = new XMLHttpRequest();
// xhr.open("GET",url) // sorgunu yaratmaq ucun open edirik. sorgu url e getmesi ucun urli yaziriq
// // open bizden 3 deyer alir get, url, asynchronous(vacib deyl) 

// xhr.onreadystatechange = function () { // xhr deyiwdikde 
//  if (xhr.readyState === 4) {
//     console.log(xhr.responseText);
//  }
// }

// xhr.send()


/* sorgular

get - datani cekib getirmek
post - yeni data gomdermek
delete - data silmek ucun
put/patch - datani deyiwdirmek ucun, put ile butun datani patch ile yalniz birini.

*/

// const url = "https://jsonplaceholder.typicode.com/users";
// const userNamesContainer = document.getElementById("username")

// const sorgu = new XMLHttpRequest(); // New varsa bu cunstructor function di.
// let users = [];
// sorgu.open("GET",url); // sorgunu open etmek lazimdir, GET metodu ve url elave edirik
// sorgu.onreadystatechange = () => { // readystate deyiwdikde ...
//    if (sorgu.readyState == 4) {
//     const data = JSON.parse(sorgu.response);
//     data.forEach(({name}) => {
//     userNamesContainer.innerHTML += `<li>${name}</li>`;
//     });
//    }
// }
// sorgu.send();

// console.log(users);
// console.log(sorgu);
// console.log(sorgu.response); // responce olmasi ucun readystate 4 olmalidi, indi readystate 1 oldugu ucun islemehyecek

// Объявление URL и Получение элемента DOM:

// const url = "https://jsonplaceholder.typicode.com/users";
// const userNamesContainer = document.getElementById("username");

// url хранит URL для API-запроса.
// userNamesContainer получает элемент с ID username из DOM, куда будут добавлены имена пользователей.

// Создание объекта XMLHttpRequest:

// const sorgu = new XMLHttpRequest();

// Создаем новый экземпляр XMLHttpRequest, который будет использоваться для выполнения запроса к API.
// Открытие запроса:

// sorgu.open("GET", url);

// Открываем запрос с методом GET и указанным URL. Это подготавливает запрос, но не отправляет его.

// Установка обработчика события onreadystatechange:

// sorgu.onreadystatechange = () => {
//     if (sorgu.readyState == 4) {
//         const data = JSON.parse(sorgu.response);
//         data.forEach(({ name }) => {
//             userNamesContainer.innerHTML += `<li>${name}</li>`;
//         });
//     }
// };
// Обработчик onreadystatechange вызывается каждый раз при изменении состояния запроса.
// Проверяем, что состояние запроса readyState равно 4, что означает, что запрос завершен.
// Парсим текстовый ответ (sorgu.response) в JavaScript-объект с помощью JSON.parse.
// Перебираем массив пользователей и добавляем каждое имя в элемент списка (<li>) внутри userNamesContainer.

// 5. Отправка запроса:

// sorgu.send();

// Отправляем запрос к серверу.

// Итог
// Код делает следующее:

// Отправляет GET-запрос на URL https://jsonplaceholder.typicode.com/users.
// Получает ответ в виде JSON-объекта, содержащего массив пользователей.
// Добавляет имена всех пользователей в элемент с ID username в виде списка.
// Потенциальные улучшения могут включать обработку ошибок и проверку статуса ответа (например, sorgu.status) перед разбором JSON и добавлением элементов в DOM.

// API Application Programmin interface




/////////////////////////////////////////////////////

// JSON JavaScript Object Noation.

// const json = {
//     "name": "ramin",
//     "surname": "mammadzade"
// }
// console.log(json); 

/* {name: 'ramin', surname: 'mammadzade'}
name
: 
"ramin"
surname
: 
"mammadzade"
[[Prototype]]
: 
Object
 */

// objecti ve ya her hansi bir datani json-a cevirmek ucun stringify metodundan istifade edirik
// const obj = {
//     name:"ramin",
//     surname:"mammadzade",
//     age: 34
// }


// // const newObj = JSON.stringify(obj) bu qaydada jsona cevirdik
// const objToJson = JSON.stringify(obj);
// const jsonToObj = JSON.parse(objToJson); // parse vasitesile jsonu objecte ceviririk

// console.log(objToJson);

// const url = "https://jsonplaceholder.typicode.com/users";
// const xhr =  new XMLHttpRequest();
// xhr.open("GET",url);
// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState);}
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) {
//         console.log(xhr.response);
//     }
// }
// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/users";
// const container = document.querySelector(".cards");

// const sorgu = new XMLHttpRequest();
// let users = [];
// sorgu.open("GET",url);
// sorgu.onreadystatechange = () => {
//     if (sorgu.readyState == 4) {
//         const data = JSON.parse(sorgu.response);
//         data.forEach(({name}) => {
//             userNamesContainer.innerHTML += `<div class="card">
//             <h2>name</h2>
//             <h3>username</h3>
//             <p>email</p>
//             <p>phone</p>
//         </div>>`;
//         });
//     }
// }

// const url = "https://jsonplaceholder.typicode.com/users";
// // promiselere solve vermeyin 2 yolu var then ve async await
// fetch(url).then((res) => { // then bizden callback function alir
// // promise solve etmezden once return etmek lazimdir
//     return res.json()
// }).then((data) => {
//     console.log(data);
// })

// const url = "https://jsonplaceholder.typicode.com/users";
// const getData = async () => {
//     const res = await fetch(url)
//     const data = await res.json();

//     console.log(data);
// }

// getData() 

////////////////


// Ваш код выполняет GET-запрос к указанному URL и выводит объект ответа в консоль. Давайте подробно рассмотрим, что происходит в этом коде:
// Определение URL:
// const url = "https://jsonplaceholder.typicode.com/users";
// Здесь создаётся константа url, которая хранит адрес API, к которому будет отправлен запрос.

// Выполнение запроса с помощью fetch:
// fetch(url).then((res) => {
//     console.log(res);
// });

// fetch(url) отправляет HTTP GET-запрос к указанному URL и возвращает промис, который разрешается в объект ответа (Response).

// Обработка промиса:
// .then((res) => {
//     console.log(res);
// });
// Используется метод then для обработки разрешённого промиса. В качестве аргумента функции, переданной в then, выступает объект ответа res, который затем выводится в консоль.

// Что представляет собой объект Response
// Объект Response содержит различную информацию о полученном ответе, такую как:
// status: HTTP статус ответа (например, 200 для успешного запроса).
// statusText: Текстовое описание статуса (например, "OK").
// headers: Заголовки ответа.
// body: Тело ответа (которое можно прочитать с помощью методов, таких как .json(), .text(), .blob() и др.).


const url = "http://localhost:3000/users/";
const cards = document.getElementById("cards")
axios(url).then(({ data }) => {
    data.forEach(({ id, firstname, Lastname }) => {
        cards.innerHTML += ` <div class="card">
            <h3>${firstname}</h3>
            <p>${Lastname}</p>
            <button class="delBtn" id=${id}>del</button>
        </div>`
    });
    const delButtons = document.querySelectorAll(".delBtn");
    delButtons.forEach((btn) => {
        btn.addEventListener("click", (e)=> {
            const id = e.target.id
            axios.delete(url + id).then((res) => {
                alert('ugurla silindi')
                location.reload()
            })
        });
    });
});





