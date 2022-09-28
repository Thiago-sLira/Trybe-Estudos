const sumAll = require('./exercicio1');
console.log(sumAll);

describe('testando o teste', () => {
    it('testando o teste', () => {
        expect(typeof sumAll).toBe('function');
        expect(sumAll(5, 5)).toEqual(10);
    })
})