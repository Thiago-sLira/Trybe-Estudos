const flatten = require('./exercicio1');

describe('Testando o flatten', () => {
    it('Verifica o resultado de flatten', () => {
        expect(typeof flatten).toBe('function');
    });
});