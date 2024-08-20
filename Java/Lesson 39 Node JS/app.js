// const url = "https://jsonplaceholder.typicode.com/users"
// fetch(url).then((res) => {
//     return res.json()
// }).then(data => {
//     console.log(data);
// })

import { readFile, writeFile } from "fs";

// import { data } from "./data.js";

// const axios = require("axios");
// const url = "https://jsonplaceholder.typicode.com/users";
// axios(url).then(({data}) => console.log(data))

// import axios from "axios";
// const url = "https://jsonplaceholder.typicode.com/users";
// axios(url).then(({data}) => console.log(data))

// console.log(data);

// readFile("./text.txt",(err,data) => {
//     console.log(data.toString());
// })
const message = "men yeni yaranmis faylam"
writeFile('./test.txt',message,(err) => {
    if(err) {
        console.log(err);
    }else {'fayl ugurla yaradildi'}
})