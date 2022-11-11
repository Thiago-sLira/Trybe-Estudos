const array = [{id: 'primeiro'}, {id: 'primeiro'}, {id: 'primeiro'}, {id: 'segundo'}, {id: 'segundo'}, {id: 'segundo'}, {id: 'terceiro'}, {id: 'terceiro'}, {id: 'terceiro'}]
// // const array1 = [{id: 'primeiro'}, {id: 'segundo'}, {id: 'terceiro'}]
console.log(array.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));
// objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
// const array = [{id: 'primeiro', quantity: 3}, {id: 'primeiro', quantity: 3}, {id: 'primeiro', quantity: 3}]

function test() {
    const result = array.reduce((previousValue, currentValue) => {
        if(previousValue.some(({ id }) => id === currentValue.id)) { // Diminuir o array a um item de cada
            return [...previousValue];
        } 
        return [...previousValue, currentValue];
    }, []);
    const mapFirst = result.map(({id}) => {
        const map = array.reduce((previousValue, currentValue) => { // Contar quantas vezes a ocorrência acontece, e somar
            if(currentValue.id === id) return previousValue + 1
            return previousValue;
        }, 0)
        return map;
    });
    const mapSecond = result.map((obj, index) => { // Setar uma nova chave quantity com o valor de ocorrências de cada objeto
        obj.quantity = mapFirst[index];
        return obj;
    })
    return mapSecond;
}

console.log(test());
