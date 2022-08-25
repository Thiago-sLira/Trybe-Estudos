// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let key in cars) {
//   console.log(key, cars[key]);
// };

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };

//   for (let key in car) {
//     console.log(key, car[key]);
//   };

//   let food = ['hamburguer', 'bife', 'acarajé'];
// for (let value of food) {
//   console.log(value);
// };

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let key in names) {
    console.log('Olá', names[key]);
}

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (let key in car) {
    console.log(key, car[key]);
}