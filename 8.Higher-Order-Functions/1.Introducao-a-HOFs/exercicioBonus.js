const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
};

const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
};

const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

//Gera numero aleatório com mínimo e máximo!!
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

//Função que retorna o dano do Dragão!!
const dragonAttack = () => {
    const minDamage = 15;
    const maxDamage = dragon.strength;
    dano = getRandomInt(minDamage, maxDamage);
    return dragon.damage = dano;
}
//   console.log(`Ataque do Dragão é de ${dragonAttack()}!!`);

//Função que retorna o dano do Guerreiro!!
const warriorAttack = () => {
    const minDamage = warrior.strength;
    const maxDamage = warrior.strength * warrior.weaponDmg;
    const dano = getRandomInt(minDamage, maxDamage);
    return warrior.damage = dano;
}
//   console.log(`Ataque do Guerreiro é de ${warriorAttack()}!!`);

//Função que retorna
const mageAttack = () => {
    const mana = mage.mana;
    const dataMage = {
        manaSpend: 0,
        dano: `Não possui mana suficiente!`,
    };
    if (mana >= 15) {
        const inteligencia = mage.intelligence;
        const dano = getRandomInt(inteligencia, (inteligencia * 2));
        dataMage.manaSpend = 15;
        dataMage.dano = dano;
        return dataMage;
    }
    return dataMage;
}
console.log(mageAttack());

const gameActions = {
    warriorTurn: (warriorAttack) => {
       
    }
  };