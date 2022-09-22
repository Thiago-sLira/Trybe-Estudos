// const randonNumber = () => Math.floor((Math.random() * 5) + 1);

// const aposta = (number) => {
//     if (number !== randonNumber()) {
//       return 'Errou!! Tente novamente.';
//     } 
//     return 'Parabens, você ganhou!!'
// }

// console.log(aposta(1));

const soluctions = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compare = (soluctions, studentAnswers) => {
    if (soluctions === studentAnswers) {
        return 1;
    } if (studentAnswers === 'N.A') {
        return 0;
    } 
    return -0.5;
};

const result = (soluctionsA, studentAnswersA, action) => {
    let counter = 0;
    for (let index = 0; index < soluctionsA.length; index += 1) {
      const actionReturn = action(soluctionsA[index], studentAnswersA[index]);
      counter += actionReturn;
    }
    return `Resultado final: ${counter} pontos!`
}
console.log(result(soluctions, studentAnswers, compare));