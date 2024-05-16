// 2. size bir obyekt veriləcək.Həmin obyekti referansı ilə birlikdə kopyalayıb ikinci obyektə mənimsədin.İkinci obyektin name xüsusiyyətini,birinci obyektin username xüsusiyyətini dəyişin.Baş verən dəyişikliklər barədə öz fikirlərinizi yazın
// const user1 = {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }

const user1 = {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        }
    }

    // let user2 = Object.assign({}, user1)
    const user2 = user1 // bu cur biz obyektin hem value hemde referansini kopyalayib gonderirik.

    user2.name = "john"
    user1.username = "Doe"
    
    console.log("User1 ", user1);
    console.log("User2 ", user2);


// OBJECT DUBLE

// Object.assign(куда(обьект), что(свойство #1), что (свойство #2), ... и так далее)

// let userinfo = {
//     name: "Kamal",
//     age: 30,
// }

// let user = Object.assign({}, userinfo) // burda object.assign sonra {} <- bu isare yeni bow obyekt isaresidi, burdan sonra ise userInfo icinden butun datalari yeni user deyiweninin icine dublirovat edir.

// Object.assign(userInfo, {['likes javascript']: true, city: "Uzhhorod"}) // userInfonun icine bu iki eded objecti elave etdi