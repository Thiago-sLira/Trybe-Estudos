// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

// let playerOne = "Gus";
// let playerTwo = "Luquinha";

// if (playerOne == 'Pedra' && playerTwo == 'Tesoura') {
//     console.log('Player 1 won')
// } else if (playerOne == 'Pedra' && playerTwo == 'Papel') {
//     console.log('Player 2 won')
// } else if (playerOne == 'Pedra' && playerTwo == 'Pedra') {
//     console.log('A Ties')
// } 

let sum = 0;

for(let count = 0; count <= 100; count = count + 1){
  sum += count;
}

console.log('A soma total de 1 a 50 é: ' + sum);