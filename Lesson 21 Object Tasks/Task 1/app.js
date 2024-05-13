//1. Car adinda constructor function yaradın, marka,model,year,engine deyə key-ləri olsun.
// Bu constructor vasitəsi ilə 3 fərqli obyekt yaradın

function car(marka, model, year, engine) {
    this.marka = marka
    this.model = model
    this.year = year
    this.engine = engine
}

let car1 = new car ('bmw', 'f10', '2015', 'n20') // Ключевое слово new используется для создания нового экземпляра объекта на основе данного конструктора.
let car2 = new car ('bmw', 'f30', '2016', 'n26')
let car3 = new car ('bmw', 'g30', '2015', 'b48')

console.log(car1);
console.log(car2);
console.log(car3);