const { funcao } = require ('./exercicio1');
console.log(funcao);

describe('testando o teste', () => {
    it('testando o teste', () => {
        expect(typeof funcao).toBe('function');
    })
})