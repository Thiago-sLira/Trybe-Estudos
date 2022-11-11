const array = [{id: 'primeiro'}, {id: 'segundo'}, {id: 'primeiro'}, {id: 'segundo'}, {id: 'terceiro'}, {id: 'segundo'}, {id: 'terceiro'}, {id: 'primeiro'}, {id: 'terceiro'}]
console.log(array.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0)));
// objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))
// const array = [{id: 'primeiro', quantity: 3}, {id: 'primeiro', quantity: 3}, {id: 'primeiro', quantity: 3}]

function test() {
    const result = array.reduce((previousValue, currentValue) => {
        if(previousValue.some(({ id }) => id === currentValue.id)) {
            return [...previousValue];
        } 
        return [...previousValue, currentValue];
    }, []);
    const mapFirst = result.map(({id}) => {
        const map = array.reduce((previousValue, currentValue) => {
            if(currentValue.id === id) return previousValue + 1
            return previousValue;
        }, 0)
        return map;
    });
    return result.map((obj, index) => {
        obj.quantity = mapFirst[index];
        return obj;
    })
}

// console.log(test());
