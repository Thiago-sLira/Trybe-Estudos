// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// } // exercício 1.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sextou = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     sextou = numbers[index] + sextou;
//     console.log(sextou);
// } // exercicio 2.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somaNumbers = 0;
// let mediaSomaNumbers = 0;

// // index += 1 == index = index + 1;
// for (let index = 0; index < numbers.length; index = index + 1) {
//     somaNumbers = numbers[index] + somaNumbers;
// } 
// mediaSomaNumbers = somaNumbers / numbers.length;
//     console.log(mediaSomaNumbers);
//     // exercicio 3.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let somaNumbers = 0;
// let mediaSomaNumbers = 0;

// // index += 1 == index = index + 1;
// for (let index = 0; index < numbers.length; index = index + 1) {
//     somaNumbers = numbers[index] + somaNumbers;
// } 
// mediaSomaNumbers = somaNumbers / numbers.length;
//     console.log(mediaSomaNumbers);
//     if (mediaSomaNumbers > 20) console.log('Valor maior que 20')
//      else console.log('Valor menor ou igual a 20')
//     // exercicio 4.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 289];
// let maiorValor = 0;

// for (let index = 0; index < numbers.length; index = index + 1) {
//     if (numbers[index] > maiorValor) {
//        maiorValor = numbers[index];
//     } 
// }
// console.log(maiorValor); // exercicio 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 289];
// let valorImpar = 0;

// for (let index = 0; index < numbers.length; index = index + 1) {
//     if (numbers[index] % 2 === 0) {
//        console.log('nenhum valor ímpar encontrado');
//     } else {
//         console.log(numbers[index]);  
//     }
// } // exercicio 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27, 289];
let menorValor = 100000;

for (index = 0; index < numbers.length; index += 1) {
    //menorValor = numbers[index]
    if (numbers[index] < menorValor) {
        menorValor = numbers[index]
    }
} console.log(menorValor);

// let array = [];

// for (index = 0; index <= 25; index =+ 1) {
//     array.push(array[index]);
// } console.log(array);

// let word = 'tryber';
// let wordInverse = '';

// for (index = 0; index < word.length; index += 1) {
//     wordInverse += word[word.length -1 - index];
// } console.log(wordInverse); // exercicio 2 (4.3)