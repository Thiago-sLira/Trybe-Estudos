//Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(arr) {
    const uva = arr.reduce((acc, cur) => {
        console.log(cur.split('').join(' '));
        cur.split('').forEach((element) => {
            if (element === 'a' || element === 'A') acc += 1;
        });
        return acc;
    }, 0);
    return uva;
}
console.log(containsA(names));
