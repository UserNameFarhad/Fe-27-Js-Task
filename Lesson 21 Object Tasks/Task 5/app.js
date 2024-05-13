// 5. propertyTaker() adinda funksiya yaradin. Argument kimi obyekt (obj) ve string (proprtyName) alsin. Hemin obyektin verdiyim propertyni ekrana cixarsin. Mes:

// propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent') // 'Asia'
// propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country') // 'Sweden'
// propertyTaker({name:'roma', age:12}, 'name') // 'roma'


function propertyTaker (obj, proprtyName) {
    console.log(obj [proprtyName]);
}

// propertyTaker ({ continent: 'Asia', country: "Japan"})
// propertyTaker ({ continent: 'Europe', country: "Sweden"})
// propertyTaker ({ naem: "Roma", age: 12})

propertyTaker({ continent: 'Asia', country: 'Japan'}, 'continent')
propertyTaker({ country: 'Sweden', continent: 'Europe'}, 'country')
propertyTaker({name:'roma', age:12}, "name")


