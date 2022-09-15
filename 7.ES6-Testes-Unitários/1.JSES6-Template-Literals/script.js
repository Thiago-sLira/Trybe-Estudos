const testingScope = (escopo) => {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      escopo === true ? ifScope = `${ifScope} Não devo ser utilizada fora do meu escopo (if)` : elseScope = `Não devo ser utilizada fora do meu escopo (else)`;
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }
  testingScope(false);
