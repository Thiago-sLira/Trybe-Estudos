const newEmployees = (register) => {
    const employees = {
        id1: register('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: register('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: register('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const register = (nomeCompleto) => {
    if(nomeCompleto === undefined) {
        return 'Preencha o campo!!';
    } 
    const email = nomeCompleto.toLowerCase().split(' ').join('_');
    return { nomeCompleto, email: `${email}@trybe.com`};
};

console.log(newEmployees(register));