let user1 = {
    name: "Ramin",
    surname: "Mammadzade",
    age: 34
}

// user 1 obyektini yeni obyekt yaradib onun icine kopyalayib gondermek isteyirikse object.assign metodundan istifade ede bilerik. Mes:

let user2 = Object.assign({}, user1) // burda object.assign sonra {} <- bu isare yeni bow obyekt isaresidi, burdan sonra ise user1 icinden butun datalari yeni user2 deyiweninin icine dublirovat edir.

console.log(user1);
console.log(user2);