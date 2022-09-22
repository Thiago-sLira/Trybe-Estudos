const wake = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (action) => console.log(action());

doingThings(wake);
doingThings(coffe);
doingThings(sleep);
