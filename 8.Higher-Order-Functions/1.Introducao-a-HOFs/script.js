const wake = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();

console.log(doingThings(wake));
console.log(doingThings(coffe));
console.log(doingThings(sleep));