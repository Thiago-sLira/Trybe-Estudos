// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// 10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = '?';

let array = [];
let resultado = 0;

for (index = 10; index < array.length; index -= 1) {
    resultado = array[index] * resultado;
}
 console.log(resultado);