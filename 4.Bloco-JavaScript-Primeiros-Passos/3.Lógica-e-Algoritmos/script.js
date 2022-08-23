// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = '?';

// let resultado = 1;

// for (let index = 10; index >= 1; index -= 1) {
//   resultado *= index;
//   console.log(resultado);
// }

// console.log(resultado);
 
let word = 'tryber';
let wordReverse = '';

for (let index = 0; index < word.length; index += 1) {
  wordReverse += word[word.length - 1 - index];
} console.log(wordReverse);