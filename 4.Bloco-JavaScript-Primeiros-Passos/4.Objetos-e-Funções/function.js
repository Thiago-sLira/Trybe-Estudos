
// // Sem função
// let nome = 'João';

// console.log('Bom dia, ' + nome);


// // Com função
// function bomDiaTryber(nome) {
//   console.log('Bom dia, ' + nome);
// }

// bomDiaTryber('Thiago');
// bomDiaTryber('João'); // Bom dia, João
// bomDiaTryber('Julia'); // Bom dia, Julia
// bomDiaTryber('Marcelo'); // Bom dia, Marcelo

let status = 'deslogado';

function logarDeslogar() {
  if (status === 'deslogado') {
    status = 'logado';
  } else {
    status = 'deslogado';
  }
}

console.log(status); // deslogado

logarDeslogar();
console.log(status); // logado

logarDeslogar();
console.log(status); // deslogado

console.log('O usuário está ' + status); // O usuário está deslogado
