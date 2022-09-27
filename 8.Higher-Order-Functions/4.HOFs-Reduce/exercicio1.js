const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten(arr) {
    // escreva seu código aqui
    arr.reduce((acc, cur) => {
        console.log(cur);
        console.log(acc);
        return acc;
    })
}
console.log(flatten(arrays));
