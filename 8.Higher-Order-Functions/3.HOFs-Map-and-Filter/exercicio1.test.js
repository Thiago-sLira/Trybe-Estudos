const getName = require('./exercicio1.js');

test('Deve retornar o nome do livro - gênero do livro - nome da pessoa autora', () => {
    expect(typeof getName).toBe('function');
    expect(getName()).toEqual(['As_Crônicas_de_Gelo_e_Fogo - Fantasia - George_R._R._Martin', 'O_Senhor_dos_Anéis - Fantasia - J._R._R._Tolkien']);
});
