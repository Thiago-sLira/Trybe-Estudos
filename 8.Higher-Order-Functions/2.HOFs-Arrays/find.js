const numbersFor = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
let firstMultipleOf5For;
for (let index = 0; index < numbersFor.length; index += 1) {
  if (numbersFor[index] % 5 === 0) {
    firstMultipleOf5For = numbersFor[index];
    break;
  }
}

console.log(firstMultipleOf5For);
// 50

//Usando a HOF find
const numbersArray = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];
const firstMultipleOf5 = numbersArray.find((number) => number % 5 === 0);

console.log(firstMultipleOf5);
// 50

const numbersCont = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbersCont.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const isEven2 = numbersCont.find((number) => number % 2 === 0);

console.log(isEven2); // 30

//Para fixar
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
   return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
};

console.log(findDivisibleBy3And5());

//Para fixar
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters());

//Para fixar
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
  function findMusic(id) {
    return musicas.find((element) => element.id === id);
  };
  
  console.log(findMusic('31031685'));