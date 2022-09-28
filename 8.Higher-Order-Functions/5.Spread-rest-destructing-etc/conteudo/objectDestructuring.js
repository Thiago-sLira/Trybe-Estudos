//Acessar objetos de forma mais simples e com menos declarações
const product = {
    name2: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

//E como exatamente funciona a desestruturação de objeto? Vamos voltar ao exemplo do objeto product. A sintaxe da desestruturação de objetos pede para passarmos o nome das propriedades que queremos acessar do lado esquerdo, entre chaves, e o objeto do lado direito:
const { name2 } = product;
console.log(name2); // Smart TV Crystal UHD

//Objeto dentro de outro objeto
// definindo o objeto
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

// desestruturando o objeto:
const { name4, age1, homeWorld: { name: planetName }, description: { jedi } } = character;

// imprimindo os valores:
console.log(`Esse é o ${name4}, ele tem ${age1} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

//Objetos com arrays como chave
const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

const { workDays, weekend } = daysOfWeek;
console.log(workDays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
console.log(weekend); // ['Saturday', 'Sunday']

const weekdays = [...workDays, ...weekend];
console.log(weekdays); // ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

//Reatribuindo nomes às variáveis
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matematica',
};

const { a: name8, b: classAssigned, c: subject } = student;

console.log(name8); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//Passando a desestruturação como parâmetro de uma função
const products = {
    name5: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const printProductDetails = ({ name5, price, seller }) => {
    console.log(`Promoção! ${name5} por apenas ${price} é só aqui: ${seller}`);
};

printProductDetails(product); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas

//Para fixar

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const trappistEnterprise = {...user, ...jobInfos}

const { name, age, nationality, profession, squad, squadInitials } = trappistEnterprise
console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}!`);