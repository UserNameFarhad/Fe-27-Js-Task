"use strict";
const ali = {
    ad: "Ali",
    age: 26,
    car: {
        model: "zapi",
        year: 1968,
    },
};
function showInfo({ ad, car }) {
    return `${ad} has ${car.model}`;
}
console.log(showInfo(ali));
