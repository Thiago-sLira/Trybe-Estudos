//Ordernar strings
const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];
food.sort();
console.log(food);
// [ 'arroz', 'chocolate', 'doce de leite', 'farofa', 'feijão' ]

//Ordenar numeros
const numbers = [1, 2, 3, 4, 27, 15, 48, 3.5, 1.1, 5, 6, 7, 8, 9, 10];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
//   people.age = people.age.sort((a, b) => a - b);
 people.sort((personA, personB) => personA.age - personB.age);
  
  console.log(people);
